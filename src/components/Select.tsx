import { ICurrencies } from "../hooks/useCurrencies";
import { Option } from "./Option";

interface ISelect {
  currencies: ICurrencies[];
  title: string;
  selectedItem: string;
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const Select = ({
  currencies,
  onSelect,
  title,
  selectedItem
}: ISelect) => {
  return (
    <div className="col">
      <label htmlFor="input" className="form-label">
        {title}
        <select
          className="form-select form-select-lg mb-3"
          aria-label=".form-select-lg"
          name=""
          id=""
          onChange={onSelect}
          value={selectedItem}
        >
          {currencies.map((item) => (
            <Option key={item.ID} name={item.Name} charCode={item.CharCode} />
          ))}
        </select>
      </label>
    </div>
  );
};
