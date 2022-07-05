import { ICurrencies } from "../hooks/useCurrencies";

interface IValue {
  quantity: number;
  value: number;
  currencyFrom: ICurrencies | undefined;
  currencyTo: ICurrencies | undefined;
}

export const ValueBox = ({
  quantity,
  value,
  currencyFrom,
  currencyTo
}: IValue) => {
  return (
    <div>
      <h4>
        {quantity} - {currencyFrom?.Name}({currencyFrom?.CharCode}) =
      </h4>
      <h2>
        {value} - {currencyTo?.Name}({currencyTo?.CharCode})
      </h2>
    </div>
  );
};
