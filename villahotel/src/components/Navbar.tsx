import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, User } from "lucide-react";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState<boolean>(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(true);
    }
  }, [location.pathname]);

  return (
    <div
      className={`px-32 py-6 fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-white/80 shadow-md backdrop-blur-lg" : "bg-transparent"}`}
    >
      <nav className="flex justify-between items-center">
        <Link to="/">
          <h1
            className={`font-semibold text-2xl ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            LuxuryHotel
          </h1>
        </Link>

        {/* Nav Links */}
        <div
          className={`flex gap-6 ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          <Link to="/" className="text-md">
            Home
          </Link>
          <Link to="/rooms" className="text-md">
            Hotel
          </Link>
          <Link to="/experience" className="text-md">
            Experience
          </Link>
          <Link to="/about" className="text-md">
            About
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex gap-6 items-center">
          <Search
            className={`h-5 w-5 cursor-pointer ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          />

          <User
            className={`h-5 w-5 cursor-pointer ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          />

          {/* Clerk User Menu */}
          {user ? (
            <UserButton userProfileMode="modal">
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<User
                  className='h-4 w-4 cursor-pointer text-gray-700'
                />}
                  onClick={() => navigate("/my-bookings")}
                />
              </UserButton.MenuItems>
            </UserButton>
          ) : (
            <button
              onClick={() => openSignIn()}
              className="px-5 py-2 bg-black text-white rounded-full"
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
