import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AllRooms from "./pages/AllRooms";

const App = () => {
  return (
    <div>
        <Navbar />
        <div className="min-h-96">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<AllRooms />} />
        </Routes>
        </div>
        <Footer />
    </div>
  )
}

export default App