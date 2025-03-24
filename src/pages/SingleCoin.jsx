import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../context/CoinContext';
import LineChart from '../components/LineChart';
const apiKey = import.meta.env.VITE_API_KEY



const SingleCoin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': `${apiKey}` },
    };

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      console.error('Failed to fetch coin data:', err);
    }
  };

    const fetchHistoricalData = async () => {
      const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'x-cg-demo-api-key': `${apiKey}` },
      };

      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options);
        const data = await response.json();
        setHistoricalData(data);
      } catch (err) {
        console.error('Failed to fetch historical data:', err);
      }
    };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency, coinId]);

  if (coinData && historicalData) {
    return (
      <div className="px-5 py-5">
        {/* Coin Name */}
        <div className="flex flex-col items-center gap-5 mt-24 mb-12">
          <img src={coinData.image.large} alt={coinData.name} className="w-24" />
          <p className="text-4xl font-medium">
            <b>{coinData.name} ({coinData.symbol.toUpperCase()})</b>
          </p>
        </div>

        {/* Coin Chart */}
        <div className="max-w-[600px] h-[250px] mx-auto">
          <LineChart historicalData={historicalData} />
        </div>

        {/* Coin Info */}
        <div className="max-w-[600px] mx-auto mt-24 flex flex-col">
          {[
            { label: "Crypto Market Rank", value: coinData.market_cap_rank },
            { label: "Current Price", value: `${currency.symbol} ${coinData.market_data.current_price[currency.name].toLocaleString()}` },
            { label: "Market Cap", value: `${currency.symbol} ${coinData.market_data.market_cap[currency.name].toLocaleString()}` },
            { label: "24 Hour High", value: `${currency.symbol} ${coinData.market_data.high_24h[currency.name].toLocaleString()}` },
            { label: "24 Hour Low", value: `${currency.symbol} ${coinData.market_data.low_24h[currency.name].toLocaleString()}` },
          ].map((item, index) => (
            <div key={index} className="flex justify-between py-3 border-b border-gray-600">
              <span>{item.label}</span>
              <span className="font-light">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="grid place-items-center min-h-[80vh]">
        <div className="spin"></div>
      </div>
    );
  }
}

export default SingleCoin
