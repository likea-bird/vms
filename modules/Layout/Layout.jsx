import { useState } from 'react'

import Header from '@/components/Navigation/Header'
import SideMenu from '@/components/Navigation/SideMenu'

export default function Layout({children}) {

  const [openMenu, setopenMenu] = useState(false)

	const handleMenu = () => {
		setopenMenu(!openMenu)
	}

  return (
    <div className='flex flex-col relative'>
          <Header handleMenu={handleMenu} openMenu={openMenu}/>
        <div className='flex'>
            {openMenu && <SideMenu handleMenu={handleMenu}/>}
            {children}
        </div>
    </div>
  )
}
