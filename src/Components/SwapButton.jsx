import React from 'react'

const SwapButton = (props) => {
  return (
    <button onClick={props.swap} className=' bg-cyan-800 text-white p-2 rounded-lg border-2 border-teal-50 hover:bg-teal-200 hover:text-black'>swap</button>
  )
}

export default SwapButton