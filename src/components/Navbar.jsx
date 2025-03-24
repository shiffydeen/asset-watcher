import React, { useContext } from 'react'
import { CoinContext } from '../context/CoinContext';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { ThemeContext } from '../context/themeContext';


const Navbar = () => {

  const {isDarkMode, toggleTheme} = useContext(ThemeContext)


    const {setCurrency} = useContext(CoinContext);

    const currencyHandler = (event)=> {
        switch (event.target.value){
          case "usd": {
            setCurrency({name: "usd", symbol: "$"});
            break;
          }
          case "eur": {
            setCurrency({name: "eur", symbol: "€"});
            break;
          }
          case "gbp": {
            setCurrency({name: "gbp", symbol: "£"});
            break;
          }
          default : {
            setCurrency({name: "ngn", symbol: "₦"});
            break;
          }
        }
      }

      // console.log(isDarkMode)

  return (
    <nav className={`flex items-center justify-between px-[10%] py-5 ${isDarkMode ? "text-gray-300" : "text-black"}text-gray-300 border-b-2 border-gray-700`}>
      <Link to="/">
        <span>AssetWatch</span>
      </Link>
      <ul className='hidden md:flex gap-10 list-none'>
        <li className="cursor-pointer">Crypto</li>
        <li className="cursor-pointer">Stocks</li>
        <li className="cursor-pointer">Blog</li>
      </ul>
      <div className="flex items-center gap-[max(1vw,12px)]">
            <select onChange={currencyHandler} className='px-2 py-1 rounded-md border-2 border-white bg-transparent text-white'>
                <option className="bg-[#09005c] text-white" value="usd">USD</option>
                <option className="bg-[#09005c] text-white" value="ngn">NGN</option>
                <option className="bg-[#09005c] text-white" value="eur">EUR</option>
                <option className="bg-[#09005c] text-white" value="gbp">GBP</option>
            </select>
            <button onClick={toggleTheme} className="flex items-center gap-2 px-6 py-2 rounded-full text-gray-800 bg-white text-[15px] font-medium border-none cursor-pointer">
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    </nav>
  )
}

export default Navbar
