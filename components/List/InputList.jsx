import InputTextX from "@/modules/Form/InputTextX";
import Select from "@/modules/Form/Select";
import { useForm } from "react-hook-form";

export default function InputList({values, edit }) {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
    <div className='flex justify-center items-center pt-4'>

        
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center space-y-3'>
            {values.map((item)=>
                item.type == 'text' || 'email' || 'number' ?
                    <InputTextX label={item.label} htmlFor={item.htmlFor} defaultValue={item.defaultValue} 
                        type={item.type} register={register} error={errors?.[item.htmlFor]} key={item.htmlFor}/>
                :
                    <Select label={item.label} name={item.htmlFor}
                        defaultValue={item.defaultValue} register={register} error={errors?.[item.htmlFor]}/>
            )}
            </form> 
            
        
    </div>
    )
}
