import { ICurrencies } from "../hooks/useCurrencies";
interface baseType {
  Value: number;
  CharCode: string;
  Name: string;
}
const base: baseType = { Value: 1, CharCode: "RUB", Name: "Российский рубль" };

export const Converter = (
  currencyList: ICurrencies[],
  fromCurrency: string,
  toCurrency: string,
  quantity: number
): number => {
  const x = currencyList.find((item) => item.CharCode === fromCurrency) || base;
  const y = currencyList.find((item) => item.CharCode === toCurrency) || base;

  return (1 / y.Value) * x.Value * quantity;
};

export const toCurrenciesList = (currencies: any): ICurrencies[] => {
  return Object.values(currencies);
};

export const convertedCurrencyList = (
  currencyList: ICurrencies[],
  base: string
) => {
  const result = currencyList.map((item) => {
    return { ...item, Value: Converter(currencyList, item.CharCode, base, 1) };
  });

  return result;
};
