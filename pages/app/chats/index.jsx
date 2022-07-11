import { useRouter } from "next/router"

import MessageCard from "@/components/Cards/MessageCard"
import Layout from "@/modules/Layout/Layout"
import WithAuth from "@/modules/Layout/WithAuth"

export default function Chats() {

	const router = useRouter()

	const onClick = (id) => {
		router.push(`${router.asPath}/${id}`)
	}

	return (
    <div className='flex flex-col space-y-4 items-center pt-20 pb-10 bg-zinc-900 min-h-screen'>
      <h4 className='text-white uppercase'> Chats</h4>

			<div className='flex flex-col space-y-4'>
				<MessageCard image='/favicon.ico' groupName='Urul Pottal' lastMessage='hi' onClick={onClick} id='1'
					lastMessageTime='11:08 am' unReadMessages='4'/> 
				<MessageCard image='/favicon.ico' onClick={onClick} groupName='Urul Pottal' lastMessage='hi' lastMessageTime='11:08 am' unReadMessages='4'/> 
				<MessageCard image='/favicon.ico' onClick={onClick} groupName='Urul Pottal' lastMessage='hi' lastMessageTime='11:08 am' unReadMessages='4'/> 

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