import React from 'react'
import Bg from '/images/bg.jpg'
import InputCurr from './Components/InputCurr'
import SwapButton from './Components/SwapButton'
const App = () => {
  return (
    <div className='w-full h-screen bg-cover bg-no-repeat flex flex-wrap justify-center items-center' style={{backgroundImage:`url("${Bg}")`}}>
    <div className="w-full">

    <div className="w-full max-w-md mx-auto relative p-6 bg-white/30  backdrop-blur-sm border border-gray-60 rounded ">
                    <form onSubmit={(e) => e.preventDefault()}>

                    <div className="w-full mb-1">
                        <InputCurr
                            label="From"
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                        <SwapButton />
                      </div>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputCurr
                            label="To"
                        />
                    </div>
                    <div className="w-full px-4">
                      <button className='w-full bg-blue-500 text-white py-2 rounded-lg'>Convert from USD to PKR</button>
                    </div>
                    </form>

    </div>
    </div>
    </div>
  )
}

export default App