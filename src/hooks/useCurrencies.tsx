import { useEffect, useState } from "react";
import { getCurrenciesList } from "../api";
import { convertedCurrencyList, toCurrenciesList } from "../utils";

export interface ICurrencies {
  ID: string;
  NumCode: string;
  CharCode: string;
  Name: string;
  Value: number;
  Previous: number;
}

export const useCurrencies = (base: string) => {
  const [currencies, setCurrencies] = useState<ICurrencies[] | []>([]);
  const [curDate, setCurDate] = useState<string>("");

  useEffect(() => {
    const callback = async () => {
      const res = await getCurrenciesList();
      setCurDate(res.Date);

      const currenciesList = toCurrenciesList(res.Valute);
      currenciesList.push({
        ID: "1",
        NumCode: "1",
        CharCode: "RUB",
        Name: "Российский рубль",
        Value: 1,
        Previous: 1
      });
      let result = convertedCurrencyList(currenciesList, base);
      setCurrencies(result);
    };
    callback();
  }, [base]);

  return { currencies, curDate };
};
