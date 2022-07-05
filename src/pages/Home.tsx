import { useState } from "react";
import { ConverterInput } from "../components/ConverterInput";
import { CurrencyIcon } from "../components/CurrencyIcon";
import { ValueBox } from "../components/ValueBox";
import { useCurrencies } from "../hooks/useCurrencies";
import { useConverter } from "../hooks/useConverter";

export const Home = () => {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("RUB");
  const [quantity, setQuantity] = useState(0);

  const { currencies } = useCurrencies("RUB");
  const { value } = useConverter(
    currencies,
    currencyFrom,
    currencyTo,
    +quantity
  );

  const switchConverter = () => {
    let fromCurrency = currencyFrom;
    setCurrencyFrom(currencyTo);
    setCurrencyTo(fromCurrency);
  };

  return (
    <div className="container">
      <div
        className="card shadow p-3 rounded-3"
        style={{ minWidth: "500px", marginTop: "30px" }}
      >
        <div className="card-body">
          <div
            className="mb-3 float-left"
            style={{ textAlign: "left", marginLeft: "30px" }}
          >
            <CurrencyIcon />
            <h6 className="card-title">Конвертировать</h6>
          </div>
          <ConverterInput
            currencies={currencies}
            currencyTo={currencyTo}
            currencyFrom={currencyFrom}
            quantity={quantity}
            value={value}
            setCurrencyFrom={setCurrencyFrom}
            setCurrencyTo={setCurrencyTo}
            setQuantity={setQuantity}
            switchConverter={switchConverter}
          />
          <ValueBox
            quantity={quantity}
            value={value}
            currencyFrom={currencies.find((i) => i.CharCode === currencyFrom)}
            currencyTo={currencies.find((i) => i.CharCode === currencyTo)}
          />
        </div>
      </div>
    </div>
  );
};
