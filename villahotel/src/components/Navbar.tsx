import { Link, useLocation } from "react-router-dom"
import { Search, User } from "lucide-react"
import { useEffect, useState } from "react"

const Navbar = () => {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    // Only add scroll effect on homepage
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    } else {
      // Other pages should ALWAYS have white + shadow
      setScrolled(true)
    }
  }, [location.pathname])

  return (
    <div
      className={`px-32 py-6 fixed top-0 left-0 w-full z-99 transition-all duration-300
        ${scrolled ? "bg-white/80 shadow-md backdrop-blur-lg" : "bg-transparent"}
      `}
    >
      <nav className="flex justify-between items-center">
        <Link to="/"><h1 className={`font-semibold text-2xl ${scrolled ? "text-black" : "text-white"}`}>LuxuryHotel</h1></Link>

        <div className={`flex gap-6 ${scrolled ? "text-gray-700" : "text-white"}`}>
          <Link to="/" className="text-md">Home</Link>
          <Link to="/rooms" className="text-md">Hotel</Link>
          <Link to="/experience" className="text-md">Experience</Link>
          <Link to="/about" className="text-md">About</Link>
        </div>

        <div className="flex gap-6 items-center">
          <Search className={`h-5 w-5 cursor-pointer ${scrolled ? "text-gray-700" : "text-white"}`} />
          <User className={`h-5 w-5 cursor-pointer ${scrolled ? "text-gray-700" : "text-white"}`} />
          <button className="px-5 py-2 bg-black text-white rounded-full">
            Login
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
