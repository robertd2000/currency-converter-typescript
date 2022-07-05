import { useState } from "react";
import { Select } from "../components/Select";
import { CurrencyItem } from "../components/CurrencyItem";
import { useCurrencies } from "../hooks/useCurrencies";

export const CurrenciesList = () => {
  const [base, setBase] = useState("RUB");

  const { currencies } = useCurrencies(base);

  return (
    <div className="container align-items-center">
      <Select
        currencies={currencies}
        title={"«базовая» валюта"}
        selectedItem={base}
        onSelect={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setBase(e.target.value)
        }
      />
      <ol
        className="list-group list-group-numbered "
        style={{ maxWidth: "800px" }}
      >
        {currencies &&
          currencies.map((item) => (
            <CurrencyItem
              ID={item.ID}
              Value={item.Value}
              NumCode={item.NumCode}
              Name={item.Name}
              CharCode={item.CharCode}
              key={item.ID}
              Previous={item.Previous}
            />
          ))}
      </ol>
    </div>
  );
};
