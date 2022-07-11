import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { getOpportunity } from '@/lib/supabaseHelpers'

import Layout from '@/modules/Layout/Layout'
import WithAuth from '@/modules/Layout/WithAuth'

export default function Opportunity() {

    const router = useRouter()

    const [opportunityData, setopportunityData] = useState(null)
    const [error, seterror] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const opportunity = await getOpportunity(router.query.id)
            setopportunityData(opportunity?.data[0])
            error && seterror(error)
        }
        router.isReady && getData()
    }, [router.isReady])
    
    return (
        <div className='flex flex-col items-center space-y-4 pt-20 pb-10 bg-zinc-900 min-h-screen text-white'>

            {/* image and heading */}
            <div className='flex flex-col items-center space-y-4 '>
                <div className='flex w-80 h-96 bg-white rounded-2xl'/>
                <div className='flex flex-col space-y-0.5 items-center'>
                    <h5 >{opportunityData?.opportunity_name}</h5>
                    <p className='text-zinc-400'>{opportunityData?.date}</p>
                </div>
            </div>

            {/* description */}
            <div className=' break-words px-6 w-screen'>
                <p>{opportunityData?.description}</p>
            </div>
        </div>
    )
}

Opportunity.getLayout = function getLayout(page) {
    return (
      <Layout >
        <WithAuth >
          {page}
        </WithAuth>
      </Layout>
    )
}