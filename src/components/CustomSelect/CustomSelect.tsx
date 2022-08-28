import Select, { SingleValue } from "react-select";
import { Currency } from "../../config/currency";
import { ICurrencyOptions } from "../../types";
import { customStyles } from "./styles";

interface IProps {
  currency: string;
  setCurrency: (value: string) => void;
}

export const options: ICurrencyOptions[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBP, label: "GBP" },
];

export const CustomSelect = ({ currency, setCurrency }: IProps) => {
  const getValue = () =>
    currency ? options.find((option) => option.value === currency) : options[0];

  const handleCurrency = (option: SingleValue<ICurrencyOptions>) => {
    if (option) setCurrency(option.value);
  };

  return (
    <Select
      options={options}
      value={getValue()}
      onChange={handleCurrency}
      styles={customStyles}
      isMulti={false}
      isSearchable={false}
    />
  );
};
