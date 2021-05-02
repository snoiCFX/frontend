import React from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";

import { ButtonProps } from "./types";

const WrapperButton = styled(StyledButton)`
  margin: 16px 0;
`;

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const { icon, text } = props;
  return (
    <WrapperButton {...props} style={{ justifyContent: !icon && "center" }}>
      {icon && icon}
      {text}
    </WrapperButton>
  );
};

export default Button;
