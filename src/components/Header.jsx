import { Image } from "primereact/image"
import DropdownBreed from "./DropdownBreed"

const Header = () => {
  return (
    <div className="bg-blue-300 w-full py-3 px-5 flex justify-between">
        <div className="w-1/3 flex gap-5 items-center">
            <Image
                src="/catlogo.png"
                alt="logo"
                width="100"
                height="200"
            />
            <span className="text-3xl uppercase font-bold">Catstagram</span>
        </div>
        <div className="content-center w-1/3">
            <DropdownBreed/>
        </div>
    </div>
  )
}

export default Header