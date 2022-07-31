

export default function MessageCard({id, image, groupName, lastMessage, lastMessageTime, unReadMessages, onClick}) {
    return (
        <div className='text-white bg-zinc-800 h-24 rounded-xl w-80
            flex justify-between px-3' onClick={()=>onClick(id)}>

            <div className='flex space-x-3 items-center bg-'>
                <img src={image} alt="image" 
                    className='rounded-full w-18 h-18 '/>

                <div className='flex flex-col items-center'>
                    <h6  className="text-xl">{groupName}</h6>
                    {/* <p className='text-base text-zinc-400'>{lastMessage}</p> */}
                </div>
            </div>    
        </div>
    )
}
