import React, { useContext } from 'react'
import { CoinContext } from '../context/CoinContext';


const Navbar = () => {

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
          case "inr": {
            setCurrency({name: "gbp", symbol: "£"});
            break;
          }
          default : {
            setCurrency({name: "ngn", symbol: "₦"});
            break;
          }
        }
      }

  return (
    <nav className="flex items-center justify-between px-[10%] py-5 text-gray-300 border-b-2 border-gray-700">
      <span>AssetWatch</span>
      <ul className='hidden md:flex gap-10 list-none'>
        <li className="cursor-pointer">Features</li>
        <li className="cursor-pointer">Pricing</li>
        <li className="cursor-pointer">Blog</li>
      </ul>
      <div className="flex items-center gap-[max(1vw,12px)]">
            <select className='px-2 py-1 rounded-md border-2 border-white bg-transparent text-white'>
                <option className="bg-[#09005c] text-white" value="usd">USD</option>
                <option className="bg-[#09005c] text-white" value="ngn">NGN</option>
                <option className="bg-[#09005c] text-white" value="eur">EUR</option>
                <option className="bg-[#09005c] text-white" value="gbp">GBP</option>
            </select>
            <button className="flex items-center gap-2 px-6 py-2 rounded-full text-gray-800 bg-white text-[15px] font-medium border-none cursor-pointer">
                Sign Up  
            </button>
        </div>
    </nav>
  )
}

export default Navbar
