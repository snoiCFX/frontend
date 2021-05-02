import React, { useContext, useState } from "react";

import {
  Wrapper,
  StyledNav,
  Body,
  MainContent,
  LeftHeader,
  RightHeader,
} from "./StyledBase";
import Panel from "./Panel";
import SessionButton from "./SessionButton";
import Logo from "./Logo";

import { SessionContext } from "../../context/SessionContext";
import links from "./links";

const Menu: React.FC = ({ children }) => {
  const { isLogged, userAddress, login } = useContext(SessionContext);

  return (
    <Wrapper>
      <StyledNav>
        <LeftHeader>
          <Logo />
        </LeftHeader>
        <RightHeader>
          <SessionButton
            isLogged={isLogged}
            userAddress={userAddress}
            onClick={login}
          />
        </RightHeader>
      </StyledNav>
      <Body>
        <Panel links={links}  />
        <MainContent>{children}</MainContent>
      </Body>
    </Wrapper>
  );
};

export default Menu;
