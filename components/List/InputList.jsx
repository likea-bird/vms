import InputTextX from "@/modules/Form/InputTextX";
import SelectX from "@/modules/Form/SelectX";

export default function InputList({values, edit, register, errors }) {

    return (
        <div className='flex flex-col justify-center pt-4 items-center space-y-3'>
            {values.map((item)=>
                item.type == 'text' || item.type == 'email' || item.type == 'number' || item.type == 'tel' ?
                    <InputTextX label={item.label} htmlFor={item.htmlFor} 
                        type={item.type} register={register} error={errors?.[item.htmlFor]} 
                        disabled={edit ? false : true} key={item.htmlFor}/>
                :
                    <SelectX label={item.label} name={item.htmlFor} disabled={edit ? false : true}
                        register={register} 
                        key={item.htmlFor} error={errors?.[item.htmlFor]}/>
            )}
        </div> 
    )
}
