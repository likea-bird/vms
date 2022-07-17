import { useState } from 'react'

import { BiError } from 'react-icons/bi'

export default function FormError({error, className}) {

  const [open, setopen] = useState(false)

  return (
    <div className='flex justify-center items-center'>
      <BiError className={`absolute right-4 text-rose-600 w-6 h-6 ${className.icon}`} onClick={()=>setopen(true)}/>
      {open && <p className={`absolute right-0 bg-rose-600 rounded-xl px-4 h-11 
        text-center flex items-center text-white ${className.text}`} onClick={()=>setopen(false)}>
          {error}
        </p>
      }
    </div>
  )
}
