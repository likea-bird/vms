import { useState, useRef, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"

import { createMessage, getMessages } from "@/lib/supabaseHelpers"
import { useAuthContext } from "@/store/Context"

import { MdOutlineArrowBack, MdSend } from "react-icons/md"

import WithAuth from "@/modules/Layout/WithAuth"
import SingleMessageCard from "@/components/Cards/SingleMessageCard"


export default function ChatPage() {

	const { user } = useAuthContext()

    const router = useRouter()

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const ref = useRef()

    const [messages, setmessages] = useState([])
    const [error, seterror] = useState(false)

    useEffect(() => {
      const getData = async () => {
        await getMessages(router.query.id, setmessages, seterror)
      }
      router.isReady && getData()
    }, [router.isReady])
    

    useEffect(() => {
        ref.current.scrollIntoView({behavior: "smooth", block: "end"});
    }, [messages])
    

    const onSubmit = async (data) => {
        await createMessage(router.query.id, user.id, data.message, seterror)
        reset()
    }

    const handleBackClick = () => {
        router.push('/app/chats')
    }

    return (
        <div className='flex flex-col bg-zinc-900 text-white relative min-h-screen'>
            
            {/* header */}
            <div className='bg-zinc-800 flex items-center space-x-4 h-18 px-4 w-screen fixed top-0 z-50'>
                <MdOutlineArrowBack className='w-8 h-8 text-white' onClick={handleBackClick}/>
                <div className='flex space-x-2'>
                    <div className='w-12 h-12 bg-white rounded-full'/>
                    <div className='flex flex-col'>
                        <h6>Name</h6>
                        <p className='text-zinc-400'>100 Volunteers</p>
                    </div> 
                </div>
            </div>

            {/* content */}

            <div className={`grid grid-cols-1 gap-y-2 content-end justify-items-stretch px-4 min-h-screen
                 pb-18 pt-24 w-screen`} 
                ref={ref}>
                { messages?.map((item)=>
                    <SingleMessageCard host={user.id} key={item.id} userId={item.volunteer.id} user={item.volunteer.name} message={item.message} time={item.time}/>
                )}
            </div>

            {/* message */}
            <form onSubmit={handleSubmit(onSubmit)} 
                className='flex justify-between space-x-3 px-2 bg-zinc-800 h-14 w-screen fixed bottom-0 z-50'>
                <input type='text' {...register("message")}
                    className='text-white bg-transparent outline-none w-full'/>
                <button type='submit'>
                    <MdSend className='w-8 h-8 text-white'/>
                </button>
            </form>   

        </div>
    )
}

ChatPage.getLayout = function getLayout(page) {
    return (
        <WithAuth>
          {page}
        </WithAuth>
    )
}