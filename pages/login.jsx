import InputText from '@/modules/Form/InputText';
import Link from 'next/link'
import { useForm } from 'react-hook-form';


export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }
    
     return (
        <div className='flex justify-center items-center px-4 min-h-screen'>
            {/* login*/}
            <div className='flex flex-col justify-center items-center space-y-5 px-6 bg-zinc-900 py-5 rounded-2xl '>

                    <h4 className='text-white'>Login</h4>
                    
                    <form className='flex flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
                        <InputText type='email' htmlFor='email' label='Email' register={register} error={errors['email']}/>
                        <InputText type='password' htmlFor='password' label='Password' register={register} error={errors['password']}/>
                        <Link href='/reset-password'>
                            <p className=" text-right text-white px-2">Forgot Password?</p>
                        </Link>
                        <button className='sbmt' type='submit'>
                            Login
                        </button> 
                    </form>
                    {/* signup button  */}
                    <Link href='/register'>
                        <p className='font-medium text-white'>New User? Register now</p>
                    </Link>
                </div>
        </div>
    )
}
