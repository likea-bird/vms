
import SideMenuList from "./SideMenuList";

export default function SideMenu({menu, button}) {

  return (
    <div className='w-screen min-h-screen z-50 absolute flex flex-col items-end top-16 
       bg-zinc-900 text-white'>
      <div className="flex flex-col space-y-4 justify-center w-full">
        {menu.map((item)=> 
          <SideMenuList key={item.name} name={item.name} icon={item.icon} onClick={item.onClick}/>
        )}
      </div>
      <div className="flex flex-col items-center w-full space-y-6 pt-8">
          {button.map((item)=> 
            <button key={item.name} className='btn-2' onClick={item.onClick}>
              {item.loading ? 'Loading...' : item.name}
            </button>
          )}
      </div>
    </div>
  )
}
