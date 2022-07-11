import React from 'react'

export default function SideMenuList({name, icon, onClick}) {
  return (
    <div className='flex space-x-4 items-center px-3 py-4' onClick={onClick}>
        {icon}
        <h5>{name}</h5>
    </div>
  )
}
