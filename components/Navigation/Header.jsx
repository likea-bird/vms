import { BiMenuAltRight } from "react-icons/bi"
import { IoMdClose } from "react-icons/io"

export default function Header({handleMenu, openMenu}) {

  return (
    <div className="flex justify-between items-center text-white bg-zinc-900 h-16
	 w-screen py-2 px-3 absolute z-50 border-b-2 border-zinc-700">
			{/* icon */}
			<div>
				<h4>Dforce</h4>
			</div>

			{/* menu */}
			<div  onClick={handleMenu}>
				{ !openMenu ? 
					<BiMenuAltRight className="w-8 h-8 "/>
				:
					<IoMdClose className="w-8 h-8 "/> }
			</div>
    </div>
  )
}
