import { useRouter } from "next/router";
import { MdLogout, MdOutlineAccountCircle, MdOutlineDangerous, MdOutlineGroup } from "react-icons/md";
import SideMenuList from "./SideMenuList";

export default function SideMenu({handleMenu}) {

  const router = useRouter()

  const handleClick = (route) => {
    router.push(route)
  }

  const handleLogout = () => {

  }

  return (
    <div className='w-screen min-h-screen absolute  flex bg-zinc-900 text-white'>

        {/* menu  */}
        <div className="flex flex-col justify-between w-full">
          <div className="flex flex-col space-y-2  divide-y-2 divide-zinc-700">
              <SideMenuList name='Profile' icon={<MdOutlineAccountCircle className="menu-icon"/>} onClick={()=> handleClick('/profile')}/>
              <SideMenuList name='Groups' icon={<MdOutlineGroup className="menu-icon"/>} onClick={()=>handleClick('/groups')}/>
          </div>
          <div className="flex flex-col space-y-2">
              <SideMenuList name='Logout' icon={<MdLogout className="menu-icon"/>} onClick={handleLogout}/>
              <h6 className="pt-10 px-2 text-center pb-10">Volunteering Mangement System</h6>
          </div>
        </div>
 
        {/* blank */}
        <div className="bg-zinc-500 w-36" onClick={handleMenu}/>
        
    </div>
  )
}
