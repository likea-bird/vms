import { useRouter } from "next/router"
import { useState, useEffect } from "react"

import { useAuthContext } from "@/store/Context"
import { getChatGroups } from "@/lib/supabaseHelpers"

import MessageCard from "@/components/Cards/MessageCard"
import Layout from "@/modules/Layout/Layout"
import WithAuth from "@/modules/Layout/WithAuth"

export default function Chats() {

	const { user } = useAuthContext()

	const router = useRouter()

	const [chatGroups, setchatGroups] = useState(null)
	const [error, seterror] = useState(false)

	useEffect(() => {
	  const getData = async () => {
		const chats = await getChatGroups(user?.id)
		chats?.data &&  setchatGroups(chats?.data)
		chats?.error && seterror(true)
	  }
	  user && getData()
	}, [user])
	

	const onClick = (id) => {
		router.push(`${router.asPath}/${id}`)
	}

	return (
    <div className='flex flex-col space-y-4 items-center pt-20 pb-10 bg-zinc-900 min-h-screen'>
      <h4 className='text-white uppercase'> Chats</h4>

			<div className='flex flex-col space-y-4'>
				{chatGroups?.map((item)=>
					<MessageCard key={item.id} id={item.id} image='/favicon.ico' onClick={onClick} groupName={item.opportunity_name} 
						lastMessage='hi' lastMessageTime='11:08 am' unReadMessages='4'/> 
				)}

			</div>
		</div>
  )
}

Chats.getLayout = function getLayout(page) {
	return (
		<Layout>
			<WithAuth>
				{page}
			</WithAuth>
		</Layout>
	)
}