import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";

const App = () => {
  return (
    <div>
        <Navbar />
        <div className="min-h-96">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<AllRooms />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
        </div>
        <Footer />
    </div>
  )
}

export default App