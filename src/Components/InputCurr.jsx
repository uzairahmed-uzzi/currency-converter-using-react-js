import React,{useId} from "react";

const InputCurr = ({
  className = "",
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurr = "usd",
  amountDisable = false,
  currencyDisable = false,
}) => {
  const amountInputID = useId();
  return (
    <div
      className={`flex flex-col gap-y-4 bg-white w-full h-max rounded-lg outline-none my-3 p-3 text-sm ${className}`}
    >
      <div className="flex justify-between w-full align-middle text-black/40 mb-2">
        <label htmlFor={amountInputID}>{label}</label> <p>Currency Type</p>
      </div>
      <div className="flex justify-between w-full align-middle">
        <div className="w-1/2">
          <input
            id={amountInputID}
            type="text"
            placeholder="Amount"
            className="outline-none w-full bg-transparent py-1.5"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>{" "}
        <div className="w-1/2 flex justify-end ">
          <select
            className="w-1/3  bg-slate-200 rounded-lg text-xs"
            value={selectCurr}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOptions.map((ele, ind) => (
              <option value={ele} key={ele}>
                {ele.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputCurr;
