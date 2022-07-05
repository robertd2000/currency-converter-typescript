import { useEffect, useState } from "react";
import { Converter } from "../utils";
import { ICurrencies } from "./useCurrencies";

export const useConverter = (
  currencies: ICurrencies[] | [],
  currencyFrom: string,
  currencyTo: string,
  quantity: number
) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const result =
      currencies.length > 0
        ? Converter(currencies, currencyFrom, currencyTo, quantity)
        : 0;
    setValue(result);
  }, [currencyFrom, currencyTo, quantity]);

  return { value };
};
