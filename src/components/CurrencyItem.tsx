import { ICurrencies } from "../hooks/useCurrencies";

export const CurrencyItem = ({
  Name: name,
  CharCode: code,
  Value: value,
  Previous: previos
}: ICurrencies) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {name}({code})
        </div>
        Предыдущий курс - {previos}
      </div>
      <span className="badge bg-primary rounded-pill h-3">
        Текущий курс - {value}
      </span>
    </li>
  );
};
