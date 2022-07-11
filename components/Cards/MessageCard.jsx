

export default function MessageCard({image, groupName, lastMessage, lastMessageTime, unReadMessages}) {
    return (
        <div className='text-white bg-zinc-800 h-24 rounded-xl w-80
            flex justify-between px-3'>

            <div className='flex space-x-3 items-center bg-'>
                <img src={image} alt="image" 
                    className='rounded-full w-18 h-18 '/>

                <div className='flex flex-col'>
                    <h6 >{groupName}</h6>
                    <p className='text-base text-zinc-400'>{lastMessage}</p>
                </div>
            </div>    

            <div className='flex flex-col space-y-1 items-end justify-center pr-0.5'>
                <p className='text-sm'>{lastMessageTime}</p>
                <p className='flex justify-center items-center bg-white w-6 h-6
                    rounded-full text-zinc-900 font-semibold'>
                    {unReadMessages}
                </p>
            </div>
        </div>
    )
}
