import { BsChevronDown } from "react-icons/bs";

export default function Select({label, name, register, disabled, error}){

  const values = name == 'gender' 
    ? ['Male','Female']
    : ['Kasargode','Kannur','Wayanad','Kozhikode','Malappuram','Trissur','Eranakulam','Idukki','Alappuzha',
      'Kottayam','Pathanamthitta','Kollam','Thiruvananthapuram']

  return(
    <div className="flex flex-col justify-center relative text-white">
        <label className='absolute top-2 text-zinc-500 px-3 font-semibold text-sm'>
          {label}
        </label>
        <select {...register(name)}
            className={`bg-zinc-800 border border-transparent outline-none focus:border-blue-600
            flex pt-4 disabled:bg-zinc-800
            rounded-xl px-3 w-80 h-16 placeholder-zinc-500 ${error && 'border-rose-600'}`}
            disabled={disabled}>
            {values?.map((item)=> 
                <option key={item} value={item} >{item}</option>
            )}
        </select>
        <BsChevronDown className='w-4 h-4 absolute right-3'/>
    </div>
  )
}
