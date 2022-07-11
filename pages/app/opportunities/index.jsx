import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import {  getJoinedOpportunities, getOpportunities, getVolunteers, joinGroup } from '@/lib/supabaseHelpers'
import { useAuthContext } from '@/store/Context'

import Layout from '@/modules/Layout/Layout'
import WithAuth from '@/modules/Layout/WithAuth'
import PageCard from '@/components/Cards/PageCard'

export default function Opportunities() {

  const router = useRouter()

  const { user } = useAuthContext()

  const [toggle, settoggle] = useState('group')
  const [opportunitiesData, setopportunitiesData] = useState(null)
  const [joinedOpportunitiesData, setjoinedOpportunitiesData] = useState(null)
  const [error, seterror] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const opportunities = await getOpportunities()
      const joinedOpportunities = await getJoinedOpportunities(user?.id)
      setopportunitiesData(opportunities?.data)
      setjoinedOpportunitiesData(joinedOpportunities?.data)
      error && seterror(error)
    }
    getData()
  }, [])

  const handleJoinGroup = async (id) => {
    const { error } = await joinGroup({groupId: id, userId: user.id})
    error && seterror(error)
  }
  const handleMoreClick = (id) =>{
    router.push(`${router.asPath}/${id}`)
  }

  const gotoChat = () => {
    router.push(`/app/chats`)
  }

  
  return (
    <div className='flex flex-col space-y-4 items-center pt-20 pb-10 bg-zinc-900 min-h-screen'>

      <h4 className='text-white uppercase'> Opportunities </h4>
      
      {/* toggle */}
      <div className='bg-zinc-800 w-72 h-12 rounded-xl grid grid-cols-2
         text-white '>
        <h5 className={`flex justify-center items-center rounded-xl rounded-r-none ${toggle == 'group' && 'bg-white text-black' }`} 
          onClick={()=>settoggle('group')}>
          All
        </h5>
        <h5 className={`flex justify-center items-center rounded-xl rounded-l-none ${toggle == 'chat' && 'bg-white text-black' }`}
          onClick={()=>settoggle('chat')}>
          Joined 
        </h5>
      </div>

      {/* content */}

      { toggle == 'group' ? 
        <div className='flex flex-col justify-center space-y-4'>
          {opportunitiesData?.map((item)=> 
            <PageCard key={item.id} id={item.id} heading={item.opportunity_name} handleJoinGroup={handleJoinGroup}
              handleMoreClick={handleMoreClick} date={item.date} desc={item?.description}/>
          )}
        </div> : 
        <div className='flex flex-col justify-center space-y-4'>
          {joinedOpportunitiesData?.map((item)=> 
            <PageCard key={item.id} id={item.id} heading={item.opportunity_name} gotoChat={gotoChat}
              date={item.date} desc={item?.description}/>
          )}
        </div>
      }

    </div>
  )
}

Opportunities.getLayout = function getLayout(page) {
    return (
      <Layout >
        <WithAuth>
          {page}
        </WithAuth>
      </Layout>
    )
}

