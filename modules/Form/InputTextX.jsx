import { useState } from "react"

import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md"
import FormError from "./FormError";

export default function InputTextX({label, htmlFor, type, error, register, defaultValue}) {

    const [inputType, setinputType] = useState(type)
    const [showPassword, setshowPassword] = useState(false)


    const handlePassword = ()=>{
        if(inputType == 'text'){
          setinputType('password')
          setshowPassword(false)
        }else if(inputType == 'password'){
          setinputType('text')
          setshowPassword(true)
        }
      }

  return(
    <div className="flex flex-col relative justify-center  text-white">
        <label className='absolute top-2 text-zinc-500 px-3 font-semibold text-sm'>
          {label}
        </label>
        <input type={inputType} placeholder={label} {...register(htmlFor, { required: 'This field is required' })}
          defaultValue={defaultValue}
            className={`bg-zinc-800 border border-transparent outline-none focus:border-blue-600
              flex pt-4
              rounded-xl px-3 w-80 h-16 placeholder-zinc-500 ${error && 'border-rose-600'}`}
            />
        {(showPassword && type =='password' && !error) ?
            <MdOutlineVisibilityOff className='absolute right-4 w-6 h-6' onClick={handlePassword}/>
            : (type == 'password' && !error) &&
            <MdOutlineVisibility className='absolute right-4 w-6 h-6' onClick={handlePassword}/>
        }
        {error && <FormError error={error?.message}/>}

    </div>
  )
}
