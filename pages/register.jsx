import InputText from '@/modules/Form/InputText';
import Link from 'next/link'
import { useForm } from 'react-hook-form';


export default function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }
    
     return (
        <div className='flex justify-center items-center px-4 min-h-screen py-8'>
            {/* login*/}
            <div className='flex flex-col justify-center items-center space-y-5 px-6 bg-zinc-900 py-5 rounded-2xl '>

                    <h4 className='text-white'>Register</h4>
                    
                    <form className='flex flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
                        <InputText type='text' htmlFor='name' label='Full Name' register={register} error={errors['name']}/>
                        <InputText type='email' htmlFor='email' label='Email' register={register} error={errors['email']}/>
                        <InputText type='tel' htmlFor='phone' label='Phone Number' register={register} error={errors['phone']}/>
                        <InputText type='number' htmlFor='age' label='Age' register={register} error={errors['age']}/>
                        <InputText type='text' htmlFor='district' label='District' register={register} error={errors['district']}/>
                        <InputText type='text' htmlFor='city' label='City' register={register} error={errors['city']}/>
                        <InputText type='number' htmlFor='pin' label='Pincode' register={register} error={errors['pin']}/>
                        <InputText type='text' htmlFor='locality' label='Locality' register={register} error={errors['pin']}/>
                        <InputText type='password' htmlFor='password' label='Password' register={register} error={errors['password']}/>
                        <button className='sbmt' type='submit'>
                            Register
                        </button> 
                    </form>
                    {/* signup button  */}
                    <Link href='/signup'>
                        <p className='font-medium text-white'>Already registered? Login now</p>
                    </Link>
                </div>
        </div>
    )
}
