import React from "react";
import styled from "styled-components";

import ConfluxIcon from "../../assets/statics/conflux-icon.png";
import { SoundWavesIcon } from "../Svg";

type SessionButtonProps = {
  onClick: any;
  isLogged: boolean;
  userAddress: string | undefined;
};

const StyledButton = styled.button`
  background-color: #34d399;
  color: #2a4931;
  outline: none;
  border: none;
  border-radius: 20px;
  &:hover {
    background-color: #90d1b9;
  }
`;

const SignInButton = styled(StyledButton)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const AddressButton = styled(StyledButton)`
  display: flex;
  padding: 4px 8px;
  font-weight: bold;
  align-items: center;
`;

const SessionButton: React.FC<SessionButtonProps> = ({
  onClick,
  isLogged,
  userAddress,
}) => {
  const checkAddress = () => {
    if (typeof userAddress !== "undefined") {
      let formatAddress = userAddress.substring(0, 16);
      return (formatAddress += "...");
    }
    return undefined;
  };

  return isLogged && typeof userAddress !== "undefined" ? (
    <AddressButton onClick={onClick}>
      <SoundWavesIcon style={{ marginRight: "8px" }} width={18} />
      {checkAddress()}
    </AddressButton>
  ) : (
    <SignInButton onClick={onClick}>
      <img style={{ width: "18px" }} src={ConfluxIcon} alt="Conflux Logo" />
    </SignInButton>
  );
};

export default SessionButton;
