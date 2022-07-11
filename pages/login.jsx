import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form'

import { useAuthContext } from '@/store/Context';
import { signIn } from '@/lib/supabaseHelpers'

import InputText from '@/modules/Form/InputText';
import Layout from '@/modules/Layout/Layout';


export default function Login() {

    const router = useRouter()

    const { setuser, setsession } = useAuthContext()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(false)

    const onSubmit = async (data) => {
        seterror(null)
        setloading(true)
        const {user, session, error} = await signIn({email: data.email, password: data.password})
        setloading(false)
        setuser(user)
        setsession(session)
        error ? seterror(error) : router.replace('/app')
    }
    
     return (
        <div className='flex justify-center items-center px-4 min-h-screen bg-zinc-900'>
            {/* login*/}
            <div className='flex flex-col justify-center items-center space-y-5 px-4 bg-zinc-800 py-10 rounded-2xl '>

                <h4 className='text-white'>Login</h4>
                
                <form className='flex flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
                    <InputText type='email' htmlFor='email' label='Email' register={register} error={errors['email']}/>
                    <InputText type='password' htmlFor='password' label='Password' register={register} error={errors['password']}/>
                    <Link href='/reset-password'>
                        <p className=" text-right text-white px-2 cursor-pointer">Forgot Password?</p>
                    </Link>
                    <button className='sbmt' type='submit'>
                        {loading ? 'Loading...' : 'Login' }
                    </button>
                    { error && <p className='text-rose-600 text-center text-base'>{error}</p> }
                </form>
                {/* signup button  */}
                <Link href='/register'>
                    <p className='font-medium text-white cursor-pointer'>New User? Register now</p>
                </Link>
            </div>
        </div>
    )
}


Login.getLayout = function getLayout(page) {
    return (
      <Layout route='no-auth'>
        {page}
      </Layout>
    )
}