import React, { useEffect, useState } from 'react'
import Bg from '/images/bg.jpg'
import InputCurr from './Components/InputCurr'
import Axios from "axios";

import SwapButton from './Components/SwapButton'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
const App = () => {
  const [amount,setAmount]=useState();
  const [fromTo,setFromTo]=useState({from:"usd",to:"pkr"});
  const [convertedAmount,setConvertedAmount]=useState();
  const [options,setOptions]=useState([]);
  const [currenInfo,setCurrenInfo]=useState({});
 


  const getData=async ()=>{
    try{
        const res = await Axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromTo.from}.json`)
        console.log(res.data[fromTo.from])    
        setCurrenInfo( res.data[fromTo.from]);
    }
    catch(err){
        console.log(err)
    }

}
useEffect(()=>{
      getData();
},[fromTo.from])
  
useEffect(()=>{
  setOptions(Object.keys(currenInfo));
},[currenInfo])
   console.log("Currency Info===>",currenInfo);
  const swap=()=>{
    setFromTo({from:fromTo.to,to:fromTo.from});
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  const convert=()=>{
    setConvertedAmount(amount * currenInfo[fromTo.to]);
  }
  return (
    <div className='w-full h-screen bg-cover bg-no-repeat flex flex-wrap justify-center items-center' style={{backgroundImage:`url("${Bg}")`}}>
    <div className="w-full">

    <div className="w-full max-w-md mx-auto relative p-6 bg-white/30  backdrop-blur-sm border border-gray-60 rounded ">
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      convert();
                    }}>

                    <div className="w-full mb-1">
                        <InputCurr
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>setFromTo((prev)=>({...prev,from:currency}))}
                            onAmountChange={(amount)=>setAmount(amount)}
                            selectCurr={fromTo.from}

                        />
                    </div>
                    <div className="relative w-full h-0.5">
                      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                        <SwapButton swap={swap}/>
                      </div>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputCurr
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>setFromTo((prev)=>({...prev,to:currency}))}
                            selectCurr={fromTo.to}
                            amountDisable={true}
                        />
                    </div>
                    <div className="w-full px-4">
                      <button onClick={() => convert()} className='w-full bg-blue-500 text-white py-2 rounded-lg'>Convert from {fromTo.from.toUpperCase()} to {fromTo.to.toUpperCase()}</button>
                    </div>
                    </form>

    </div>
    </div>
    </div>
  )
}

export default App