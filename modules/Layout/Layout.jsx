import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

import { supabase } from 'supabse';
import { signOut } from '@/lib/supabaseHelpers';

import { MdLogout, MdOutlineAccountCircle, MdOutlineFormatListBulleted,
  MdOutlineGroup, MdOutlineInfo } from "react-icons/md";
import { RiContactsBook2Line} from "react-icons/ri";
import { HiOutlineChat} from "react-icons/hi";

import Header from '@/components/Navigation/Header'
import SideMenu from '@/components/Navigation/SideMenu'


export default function Layout({children, route}) {


  const router = useRouter()

  const [openMenu, setopenMenu] = useState(false)
  const [error, seterror] = useState(false)
  const [loading, setloading] = useState(false)

	const handleMenu = () => {
		setopenMenu(!openMenu)
	}

  const handleRoute = (route) => {
    router.push(route)
    handleMenu()
  }

  const handleLogout = async () => {
    await signOut({seterror: seterror, setloading: setloading, router: router})
  }

  useEffect(() => {
    const user = supabase.auth.user()
    user == null && route !== 'no-auth' && router.replace('/login')
  }, [])
  


  return (
    <div className='flex flex-col relative bg-zinc-100 '>
      { route == 'no-auth' ?
        <div>
          <Header handleMenu={handleMenu} openMenu={openMenu}/>
          {openMenu && 
            <SideMenu menu={[
              {name: 'Home', icon: <MdLogout className="menu-icon"/>, onClick: ()=>handleRoute('/')},
              {name: 'Contact', icon: <RiContactsBook2Line className="menu-icon"/>, onClick: ()=>handleRoute('/#contact')},
              {name: 'About Us', icon: <MdOutlineInfo className="menu-icon"/>, onClick: ()=>handleRoute('/#about')},
              {name: 'Rules', icon: <MdOutlineFormatListBulleted className="menu-icon"/>, onClick: ()=>handleRoute('/#rules')},
            ]} button={[
              {name: 'Volunteer Login', onClick: ()=>handleRoute('/login')},
              {name: 'Become a Volunteer', onClick: ()=>handleRoute('/register')},
            ]}/>}
        </div>
      :
        <div>
          <Header handleMenu={handleMenu} openMenu={openMenu}/>
          {openMenu && 
            <SideMenu menu={[
              {name: 'Home', icon: <MdLogout className="menu-icon"/>, onClick: ()=>handleRoute('/app')},
              {name: 'Profile', icon: <MdOutlineAccountCircle className="menu-icon"/>, onClick: ()=>handleRoute('/app/profile')},
              {name: 'Rules', icon: <MdOutlineFormatListBulleted className="menu-icon"/>, onClick: ()=>handleRoute('/app#rules')},
              {name: 'Opportunities', icon: <MdOutlineGroup className="menu-icon"/>, onClick: ()=>handleRoute('/app/opportunities')},
              {name: 'Chats', icon: <HiOutlineChat className="menu-icon"/>, onClick: ()=>handleRoute('/app/chats')},
              {name: 'About Us', icon: <MdOutlineInfo className="menu-icon"/>, onClick: ()=>handleRoute('/app#about')},
              {name: 'Contact', icon: <RiContactsBook2Line className="menu-icon"/>, onClick: ()=>handleRoute('/app#contact')},
            ]} button={[
              {name: 'Logout', onClick: handleLogout, loading: loading}
            ]}/>}
        </div>
      }
        {children}
    </div>
  )
}
