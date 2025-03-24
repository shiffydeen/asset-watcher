import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import SingleCoin from "./pages/SingleCoin"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import { useContext } from "react"
import { ThemeContext } from './context/themeContext';



function App() {

  const {isDarkMode} = useContext(ThemeContext)

  // console.log(isDarkMode)
  
  const themeClass = isDarkMode 
  ? "text-white bg-gradient-to-b from-[#0b004e] via-[#1d152f] to-[#002834]" 
  : "text-black bg-gradient-to-b from-[#dedede] via-[#bebebe] to-[#6c6c6c]";
  
  console.log(themeClass)
  return (
    
    <div className={`min-h-screen ${isDarkMode ? "text-white !bg-slate-800" : "text-black !bg-slate-400"}`}>
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
