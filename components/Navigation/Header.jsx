import { BiMenuAltLeft, BiMessageRoundedDetail } from "react-icons/bi"
import { IoMdClose } from "react-icons/io"

export default function Header({handleMenu, openMenu}) {

  return (
    <div className="flex justify-between items-center text-white bg-zinc-900 h-16 p-2">
			
			{/* menu */}
			<div onClick={handleMenu}>
				{ !openMenu ? 
					<BiMenuAltLeft className="w-8 h-8 "/>
				:
					<IoMdClose className="w-8 h-8 "/> }
			</div>

			{/* meesage */}
			<div>
				<BiMessageRoundedDetail className="w-8 h-8"/>
			</div>
    </div>
  )
}
