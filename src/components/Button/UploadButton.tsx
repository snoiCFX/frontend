import React from "react";
import styled from "styled-components";

import StyledButton from "./StyledButton";

const Button = styled(StyledButton) <{ isActive: boolean }>`
  background: ${({ isActive }) => `${isActive ? "#34d399" : "#283045"}`};
  font-size: 18px;
`;

interface Props {
  text: string;
  isActive: boolean;
}

const UploadButton: React.FC<Props> = ({ text, isActive }) => {
  return <Button isActive={isActive} > {text} </Button>;
};

export default UploadButton;
