import { Select } from "../components/Select";
import { Input } from "../components/Input";
import { ICurrencies } from "../hooks/useCurrencies";
import { SwitchBtn } from "./SwitchBtn";

interface IConverterInput {
  currencyFrom: string;
  currencyTo: string;
  quantity: number;
  currencies: ICurrencies[];
  value: number;
  setCurrencyTo: (e: string) => void;
  setCurrencyFrom: (e: string) => void;
  setQuantity: (e: number) => void;
  switchConverter: () => void;
}

export const ConverterInput = ({
  currencyFrom,
  currencyTo,
  quantity,
  currencies,
  setCurrencyFrom,
  setCurrencyTo,
  setQuantity,
  switchConverter
}: IConverterInput) => {
  return (
    <div className="row mt-2">
      <Input value={quantity} onChange={(e) => setQuantity(+e.target.value)} />
      <Select
        currencies={currencies}
        selectedItem={currencyFrom}
        title={"с"}
        onSelect={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setCurrencyFrom(e.target.value)
        }
      />

      <SwitchBtn switchConverter={switchConverter} />

      <Select
        currencies={currencies}
        selectedItem={currencyTo}
        title={"в"}
        onSelect={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setCurrencyTo(e.target.value)
        }
      />
    </div>
  );
};
