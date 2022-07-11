import { useState } from "react"

import InputList from "@/components/List/InputList"
import Layout from "@/modules/Layout/Layout"
import WithAuth from "@/modules/Layout/WithAuth"

export default function Profile() {


    const [editClicked, seteditClicked] = useState(false)

    return (
        <div className='flex flex-col space-y-4 items-center pt-20 pb-10 bg-zinc-900'>

            <div className='flex justify-center items-center text-white bg-zinc-800 border border-zinc-700 w-40 h-40 rounded-full'>
                <h3>SA</h3>
            </div>

            <div className='flex flex-col '>
                <div className='flex justify-between items-center text-white'>
                    <h4>Details</h4>
                    { !editClicked ? 
                        <button className='bg-zinc-800 text-white rounded-xl px-6 h-10 font-semibold'
                             onClick={()=>seteditClicked(true)}>
                            Edit
                        </button> :
                        <div className='flex space-x-2'>
                            <button className='bg-zinc-800 text-white rounded-xl px-4 h-10 font-semibold'
                                onClick={()=>seteditClicked(false)}>
                                Save
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
                        {label: 'Name', htmlFor:'name', type:'text', defaultValue: 'Sajeesh'},
                        {label: 'Age', htmlFor:'age', type:'number', defaultValue: '21'},
                        {label: 'Gender', htmlFor:'gender', type:'select', defaultValue: 'Male'},
                        {label: 'Email', htmlFor:'email', type:'email', defaultValue: 's@j.ee'},
                        {label: 'Phone Number', htmlFor:'phone', type:'tel', defaultValue: '6238065153'},
                        {label: 'District', htmlFor:'district', type:'select', defaultValue: 'Kannur'},
                        {label: 'City', htmlFor:'city', type:'text', defaultValue: 'Karivellur'},
                        {label: 'Locality', htmlFor:'locality', type:'text', defaultValue: 'Anoor'},
                        {label: 'Pincode', htmlFor:'pin', type:'number', defaultValue: '670521'},
                    ]} edit={editClicked}/>
                </div>
            </div>
            
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