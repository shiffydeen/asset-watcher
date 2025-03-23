import React, { useState } from 'react'

const Home = () => {

    const [input, setInput] = useState('');


  return (
    <div className='px-2 pb-24'>
      <div className='max-w-[600px] mx-auto mt-20 flex flex-col items-center text-center gap-8'>
        <h1 className='text-[max(4vw,36px)] font-bold leading-tight'>Largest <br /> Crypto Marketplace</h1>
        <p className="text-gray-300 w-[75%] leading-6">
          Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.
        </p>
        <form className="w-[80%] flex items-center gap-3 bg-white p-2 rounded-md">
          <input 
            list="coinlist" 
            value={input} 
            type="text" 
            placeholder="Search crypto.." 
            required 
            className="flex-1 text-lg p-2 outline-none border-none"
          />
          {/* <datalist id="coinlist">
            {allCoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist> */}

          <button type="submit" className="bg-[#7972ff] text-white text-lg px-6 py-2 rounded-md cursor-pointer">
            Search
          </button>
        </form>
      </div>
        <div className="max-w-[800px] mx-auto bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg mt-10">
            <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] p-4 border-b border-gray-600 font-semibold">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p className="text-center">24H Change</p>
                <p className="text-right hidden md:block">Market Cap</p>
            </div>

            {/* {displayCoin.slice(0, 10).map((item, index) => (
            <Link to={`/coin/${item.id}`} key={index} className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] p-4 border-b border-gray-600 items-center hover:bg-gray-800 transition">
                <p>{item.market_cap_rank}</p>
                <div className="flex items-center gap-3">
                <img src={item.image} alt={item.name} className="w-9 md:w-10" />
                <p>{item.name} - {item.symbol.toUpperCase()}</p>
                </div>
                <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                <p className={item.price_change_percentage_24h > 0 ? "text-green-500 text-center" : "text-red-500 text-center"}>
                {Math.floor(item.price_change_percentage_24h * 100) / 100}%
                </p>
                <p className="text-right hidden md:block">{currency.symbol} {item.market_cap.toLocaleString()}</p>
            </Link>
            ))} */}
      </div>
    </div>
  )
}

export default Home
