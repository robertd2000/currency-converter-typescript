interface IOption {
  name: string;
  charCode: string;
}

export const Option = ({ name, charCode }: IOption) => {
  console.log();

  return (
    <option value={charCode}>
      {name}({charCode})
    </option>
  );
};
