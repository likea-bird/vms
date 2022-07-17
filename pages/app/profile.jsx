import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"

import { useAuthContext } from "@/store/Context"
import { updateProfile } from "@/lib/supabaseHelpers"

import InputList from "@/components/List/InputList"
import Layout from "@/modules/Layout/Layout"
import WithAuth from "@/modules/Layout/WithAuth"

export default function Profile() {

    const { user } = useAuthContext()

    const { register, handleSubmit, formState: { errors },reset } = useForm({
        defaultValues: user?.user_metadatass
    })

    const [editClicked, seteditClicked] = useState(false)

    const [error, seterror] = useState(false)
    const [success, setsuccess] = useState(false)
    const [loading, setloading] = useState(false)

    useEffect(() => {
        reset(user?.user_metadata)
      }, [user]);

    const onSubmit = async (data) => {
        await updateProfile(data, setsuccess, seterror, setloading)
        seteditClicked(false)
    }


    return (
        <div className='flex flex-col space-y-4 items-center pt-20 pb-10 bg-zinc-900'>

            <div className='flex justify-center items-center text-white bg-zinc-800 border border-zinc-700 w-40 h-40 rounded-full'>
                <h3>{user?.user_metadata.name?.substring(0,2)?.toUpperCase()}</h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col '>
                <div className='flex justify-between items-center text-white'>
                    <h4>Details</h4>
                    { !editClicked ? 
                        <button className='bg-zinc-800 text-white rounded-xl px-6 h-10 font-semibold'
                             onClick={()=>seteditClicked(true)}>
                            Edit
                        </button> :
                        <div className='flex space-x-2'>
                            <button className='bg-zinc-800 text-white rounded-xl px-4 h-10 font-semibold'
                                type='submit'>
                                {loading ? 'Saving...' :'Save'}
                            </button>
                            <button className='bg-rose-700 text-white rounded-xl px-4 h-10 font-semibold'
                                onClick={()=>seteditClicked(false)}>
                                Cancel
                            </button>
                        </div>
                    }
                </div>

                <div className='flex flex-col'>
                    <InputList values={[
                        {label: 'Name', htmlFor:'name', type:'text', },
                        {label: 'Age', htmlFor:'age', type:'number', },
                        {label: 'Gender', htmlFor:'gender', type:'select', },
                        {label: 'Email', htmlFor:'email', type:'email', },
                        {label: 'Phone Number', htmlFor:'phone', type:'tel', },
                        {label: 'District', htmlFor:'district', type:'select', },
                        {label: 'City', htmlFor:'city', type:'text', },
                        {label: 'Locality', htmlFor:'locality', type:'text', },
                        {label: 'Pincode', htmlFor:'pin', type:'number', },
                    ]} register={register} errors={errors}
                    edit={editClicked} />
                </div>
            </form>
            
        </div>
    )
}

Profile.getLayout = function getLayout(page) {
    return (
      <Layout>
        <WithAuth>
            {page}
        </WithAuth>
      </Layout>
    )
  }