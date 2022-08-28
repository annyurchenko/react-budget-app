import React, { useState } from "react";
import { options, CustomSelect } from "../CustomSelect/CustomSelect";
import { StyledHeader, Title } from "./styles";

export const Header = () => {
  const [currency, setCurrency] = useState<string>(options[0].value);

  return (
    <StyledHeader>
      <Title>Budget App</Title>
      <CustomSelect currency={currency} setCurrency={setCurrency} />
    </StyledHeader>
  );
};
