interface IInput {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, onChange }: IInput) => {
  return (
    <div className="col">
      <div className="input-group input-group-lg">
        <label htmlFor="input" className="form-label">
          Сумма
          <input
            type="number"
            id="input"
            value={Number(value).toString()}
            onChange={onChange}
            className="form-control form-control-lg"
            aria-label="Currency amount (with dot and two decimal places)"
          />
        </label>
      </div>
    </div>
  );
};
