import { useEffect,useState } from "react";
import Axios from "axios";
const useCurrencyInfo=(currency)=>{
    const [data,setData]=useState({})
    const getData=async ()=>{
        try{
            const res = await Axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            console.log(res.data[currency])    
            return res.data[currency]
        }
        catch(err){
            console.log(err)
        }

    }
    useEffect(()=>{
       setData( async(prev) => await getData());
    },[currency])
    console.log("adads",data)
    return data
}

export default useCurrencyInfo;