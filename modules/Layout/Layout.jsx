import { useState } from 'react'
import { useRouter } from 'next/router';

import { MdLogout, MdOutlineAccountCircle, MdOutlineFormatListBulleted,
  MdOutlineGroup, MdOutlineInfo } from "react-icons/md";
import { RiContactsBook2Line} from "react-icons/ri";

import Header from '@/components/Navigation/Header'
import SideMenu from '@/components/Navigation/SideMenu'
import { useAuthContext } from '@/store/Context';

export default function Layout({children, route}) {

  const router = useRouter()

  const [openMenu, setopenMenu] = useState(false)

	const handleMenu = () => {
		setopenMenu(!openMenu)
	}

  const handleRoute = (route) => {
    router.push(route)
    handleMenu()
  }


  return (
    <div className='flex flex-col relative '>
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
              {name: 'Opportunities', icon: <MdOutlineGroup className="menu-icon"/>, onClick: ()=>handleRoute('/app/opportunities')},
              {name: 'Contact', icon: <RiContactsBook2Line className="menu-icon"/>, onClick: ()=>handleRoute('/app#contact')},
              {name: 'About Us', icon: <MdOutlineInfo className="menu-icon"/>, onClick: ()=>handleRoute('/app#about')},
              {name: 'Rules', icon: <MdOutlineFormatListBulleted className="menu-icon"/>, onClick: ()=>handleRoute('/app#rules')},
            ]} button={[
              {name: 'Logout', onClick: ()=>handleRoute('/login')}
            ]}/>}
        </div>
      }
        {children}
    </div>
  )
}
