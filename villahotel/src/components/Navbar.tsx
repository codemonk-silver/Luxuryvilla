import { Link } from "react-router-dom"
import { Search, User } from "lucide-react"

const Navbar = () => {
  return (
    <div className="px-32 py-6 fixed top-0 left-0 w-full z-10">
        <nav className="flex justify-between items-center">
            <Link to='/'><h1 className="font-semibold text-2xl text-white">LuxuryHotel</h1></Link>
            <div className="flex gap-6 text-white">
                <Link to='/' className="text-md">Home</Link>
                <Link to='/hotel' className="text-md">Hotel</Link>
                <Link to='/experience' className="text-md">Experience</Link>
                <Link to='/about' className="text-md">About</Link>
            </div>
            <div className="flex gap-6 items-center">
                <Search className="h-5 w-5 cursor-pointer text-white" />
                <User className="h-5 w-5 cursor-pointer text-white" />
                <button className="px-5 py-2 bg-black text-white rounded-full">
                    Login
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
