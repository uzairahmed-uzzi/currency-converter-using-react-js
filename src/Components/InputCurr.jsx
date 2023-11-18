import React from "react";

const InputCurr = (props) => {
  return (
    <div className="flex flex-col gap-y-4 bg-white w-full h-max rounded-lg outline-none my-4 p-3 text-sm">
      <div className="flex justify-between w-full align-middle text-black/40 mb-2">
        <p>{props.label}</p> <p>Currency Type</p>
      </div>
      <div className="flex justify-between w-full align-middle">
        <div className="w-1/2">
          <input
            type="number"
            placeholder="Amount"
            className="outline-none w-full bg-transparent py-1.5"
          />
        </div>{" "}
        <div className="w-1/2 flex justify-end ">
          <select className="w-1/3  bg-slate-200 rounded-lg text-xs">
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputCurr;
