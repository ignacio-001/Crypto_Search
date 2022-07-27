import React, { useState } from 'react'
import {useEffect} from 'react'
import Axios from 'axios'
import Coin from './components/Coin'
import './App.css'
const App = () => { 
  const [listOfCoins,setlistOfCoins]=useState([]);
  const [searchWord,setSearchWord] =useState([]);
  useEffect(()=>{
   Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
    (response)=>{
     setlistOfCoins(response.data.coins);
    }
   )
  },[]);
  const filteredCoins =listOfCoins.filter((coin)=>{
const word=searchWord.toString().toLowerCase();
    return coin.name.toLowerCase().includes(word);
  })
  return (
   <div className="App">
    <div className="cryptoHeader">
    <input type="text" placeholder='Search Coin...' onChange={(event)=>{setSearchWord(event.target.value)}}/>
    </div>
    <div className="cryptoDisplay">{filteredCoins.map((coin)=>{
      return <Coin name={coin.name} icon ={coin.icon} symbol={coin.symbol} price={coin.price}/>;
    })}</div>
   </div>
  )
}

export default App