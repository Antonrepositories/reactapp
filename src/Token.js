import React from 'react'
import './Token.css';
const Token = ({logo,
    tokenName,
    tokenSymbol,
    tokenPrice,
    tokenVolume,
    hours24_changepr,
    change24,
    lastupdate}) => {
  return (
    <div className='container'>
        <div className='token-row'>
            <div className='token-image'>
                <img src={logo} alt='blanker'></img>
                <h1>{tokenName}</h1>
                <p className='tokensymbol'>{tokenSymbol}</p>
            </div>
            <div className='tokenData'>
                <p className='tokenPrice'>${tokenPrice}</p>
                <p className='totalVolune'>${tokenVolume.toLocaleString()}</p>
                {change24 < 0 ? (
                    <p className='change24 red'>{change24.toFixed(2)}$</p>
                ):
                    <p className='change24 green'>{change24.toFixed(2)}$</p>
                }
                {hours24_changepr < 0 ? (
                    <p className='change24p red'>{hours24_changepr.toFixed(2)}%</p>
                ):
                    <p className='change24p green'>{hours24_changepr.toFixed(2)}%</p>
                }
                <p className='update'>{lastupdate.toString()}</p>
            </div>
        </div>
    </div>
  )
}

export default Token