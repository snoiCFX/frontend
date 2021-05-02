import React from "react";
import styled from "styled-components";

import StyledButton from "./StyledButton";

import PulseIcon from "../../assets/statics/pulse.gif";

const Button = styled(StyledButton)<{ isActive: boolean, isLoading: boolean, center: boolean}>`
  background: ${({ isActive }) => `${isActive ? "#34d399" : "#283045"}`};
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin: ${({ center }) => `${center && "0 auto"}`};
  img {
    margin-right: ${({ isLoading }) => `${isLoading && "16px"}`};
  }
`;

interface Props {
  text: string;
  isActive: boolean;
  onClick?: any;
  center?: boolean;
  isLoading?: boolean;
}

const UploadButton: React.FC<Props> = ({ text, isActive, onClick, center, isLoading }) => {
  return (
    <Button onClick={onClick} isActive={isActive} center={center} isLoading={isLoading}>
      { isLoading && <img alt="loading-icon" src={PulseIcon} width={25} height={18} /> }
    {text}
    </Button>
  );
};

export default UploadButton;
