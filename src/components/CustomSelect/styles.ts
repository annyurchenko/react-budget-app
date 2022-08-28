import { StylesConfig } from "react-select";
import { Color } from "../../ui/colors";
import { ICurrencyOptions } from "../../types";

export const customStyles: StylesConfig<ICurrencyOptions> = {
  control: (styles) => {
    return {
      ...styles,
      borderRadius: 5,
      border: `1px solid ${Color.LightGray}`,
    };
  },

  singleValue: (styles) => {
    return {
      ...styles,
      textAlign: "center",
      color: Color.Black,
      fontSize: "12px",
      lineHeight: "15px",
      padding: "8px 6px 7px 9px",
    };
  },
};
