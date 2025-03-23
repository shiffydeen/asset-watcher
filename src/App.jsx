import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import SingleCoin from "./pages/SingleCoin"
import Home from "./pages/Home"
import Footer from "./components/Footer"



function App() {
  
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#0b004e] via-[#1d152f] to-[#002834]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coin/:coinId" element={<SingleCoin />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
