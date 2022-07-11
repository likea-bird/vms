import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {reactLocalStorage} from 'reactjs-localstorage';

export default function WithAuth({children}){

  const router = useRouter()

  useEffect(() => {
    const s = reactLocalStorage.getObject('supabase.auth.token')
    s == {} && router.replace('/login')
  }, [])
  
  return (
    <>
      {children}
    </>
  )
}
