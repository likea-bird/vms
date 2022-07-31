import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link'

import { useAuthContext } from '@/store/Context';
import { signUp } from '@/lib/supabaseHelpers';

import InputText from '@/modules/Form/InputText';
import Select from '@/modules/Form/Select';
import Layout from '@/modules/Layout/Layout';
import InputTextX from '@/modules/Form/InputTextX';
import SelectX from '@/modules/Form/SelectX';


export default function Register() {

    const router = useRouter()

    const { setuser, setsession } = useAuthContext()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(false)

    const onSubmit = async (data) => {
        seterror(null)
        await signUp({
            email: data.email, 
            password: data.password, 
            data: data, 
            setloading: setloading,
            seterror: seterror,
            router: router
        })
    }
    
     return (
        <div className='flex justify-center items-center px-4 min-h-screen py-8 pt-20 bg-zinc-900  '>
            {/* login*/}
            <div className='flex flex-col justify-center items-center space-y-5 px-6 bg-zinc-800 py-5 rounded-2xl '>

                    <h4 className='text-white'>Register</h4>
                    
                    <form className='flex flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
                        <InputTextX type='text' htmlFor='name' label='Full Name' register={register} error={errors['name']}/>
                        <SelectX name='gender' label='Gender' register={register} values={['male','female']} error={errors['gender']}/>
                        <InputTextX type='date' htmlFor='dob' label='Date of Birth' register={register} error={errors['dob']}/>
                        <InputTextX type='tel' htmlFor='phone' label='Phone Number' register={register} error={errors['phone']}/>
                        <InputTextX type='text' htmlFor='street' label='Street' register={register} error={errors['street']}/>
                        <InputTextX type='text' htmlFor='city' label='City' register={register} error={errors['city']}/>
                        <SelectX name='district' label='District' register={register} error={errors['district']}/>
                        <InputTextX type='number' htmlFor='pin' label='Pincode' register={register} error={errors['pin']}/>
                        <InputTextX type='email' htmlFor='email' label='Email' register={register} error={errors['email']}/>
                        <InputTextX type='password' htmlFor='password' label='Password' register={register} error={errors['password']}/>
                        <button className='sbmt' type='submit'>
                            {loading ? 'Loading...' : 'Register' }
                        </button>
                        { error && <p className='text-rose-600 text-center text-base'>{error}</p> }
                    </form>
                    {/* signup button  */}
                    <Link href='/login'>
                        <p className='font-medium text-white'>Already registered? Login now</p>
                    </Link>
                </div>
        </div>
    )
}


Register.getLayout = function getLayout(page) {
    return (
      <Layout route='no-auth'>
        {page}
      </Layout>
    )
}