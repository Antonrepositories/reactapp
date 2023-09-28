import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Token from './Token';

const apilink = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d&locale=en'

function App() {
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios
    .get(apilink)
    .then(res =>{
    setCrypto(res.data)
    console.log(res.data)
  }).catch(error => console.log(error));
  },[]);
  const handleSearch = s => {
    setSearch(s.target.value)
  }
  const searchResult = crypto.filter(token =>
     token.name.toLowerCase().includes(search.toLowerCase())
     );
  return (
    <div className="CryptoPricesApp">
      <div className='poweredBy'>
        <h2>Api provider</h2>
        <img className='Geko' src='https://static.coingecko.com/s/coingecko-logo-white-ea42ded10e4d106e14227d48ea6140dc32214230aa82ef63d0499f9c1e109656.png'></img>
      </div>
      <div className='searchBar'>
        <h1 className='coin-name'>Search token name</h1>
        <form>
          <input type='text' placeholder='Search' className='coin-input-name' 
          onChange={handleSearch}></input>
        </form>
      </div>
      <div className='info-row'>
        <p className='coin-n'>Coin</p>
        <p className='price'>Price</p>
        <p className='volume'>Volume</p>
        <p className='hcash'>24h$</p>
        <p className='hpercent'>24h%</p>
        <p className='last-updt'>Last updated</p>
      </div>
      {searchResult.map(crypto => {
        return (<Token key={crypto.id}
          tokenName={crypto.name}
          logo={crypto.image}
          tokenSymbol={crypto.symbol}
          tokenPrice={crypto.current_price}
          tokenVolume={crypto.total_volume}
          hours24_changepr={crypto.price_change_percentage_24h}
          change24={crypto.price_change_24h}
          lastupdate={crypto.last_updated}></Token>)
      })}
    </div>
  );
}

export default App;
