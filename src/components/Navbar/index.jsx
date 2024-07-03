import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
     return (
        <header  className="bg-color-accent">
            <div className="flex md:flex-row flex-col gap-2 justify-between p-4 items-center">
                <Link href={'/'} className="font-bold text-white hover:text-color-secondary text-2xl hover:border-b-2 transition-all">Afganime</Link>
                <InputSearch/>
            </div>
        </header>
     )
}

export default Navbar