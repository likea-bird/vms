

export default function PageCard({id, heading, date, desc, joinedGroup, handleJoinGroup, handleMoreClick, gotoChat, image}) {
  
  return (
    <div className='flex justify-between items-center px-4 bg-zinc-800 h-48 w-80 rounded-xl text-white'>

        {/* image */}
        <div className='bg-white w-28 h-40 rounded-lg text-black'>
          
        </div>

        <div className='flex flex-col space-y-8 justify-center items-center'>

          {/* details */}
          <div className='flex flex-col'> 
            <div className='flex flex-col'>
              <h5>{heading}</h5>
              <p className='text-zinc-400 text-sm'>{date}</p>
            </div>
            <p className='break-words w-40 text-xs'>{desc.length > 40 ? desc.slice(0,60).concat('...') : desc}</p>
          </div>

          {/* buttons */}
          <div className='flex justify-between w-full'>
            { (handleJoinGroup && joinedGroup[0] !== id) && 
              <button className='bg-white text-black rounded-xl py-1 px-4 font-semibold' onClick={()=>handleJoinGroup(id)}>
                Join
              </button> }
            { gotoChat && 
            <button className='bg-white text-black rounded-xl py-1 px-4 font-semibold' onClick={()=>gotoChat(id)}>
              Chat
            </button> }
            <button className='bg-white text-black rounded-xl py-1 px-4 font-semibold' onClick={()=>handleMoreClick(id)}>
              More
            </button>
          </div>
        </div>


    </div>
  )
}
