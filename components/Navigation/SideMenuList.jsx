import React from 'react'

export default function SideMenuList({name, icon, onClick}) {
  return (
    <div className='flex space-x-4 items-center px-2 pt-2' onClick={onClick}>
        {icon}
        <h6>{name}</h6>
    </div>
  )
}
