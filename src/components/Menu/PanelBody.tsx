import React, { SVGAttributes } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import * as IconsModule from "./icons";
import MenuLink from "./components/MenuLink";

import { PanelProps } from "./types";

const Icons = (IconsModule as unknown) as {
  [key: string]: React.FC<SVGAttributes<HTMLOrSVGElement>>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  font-size: 18px;
`;

const MenuItem = styled.div`
  display: flex;
  height: 48px;
  margin: 16px 0;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

const PanelBody: React.FC<PanelProps> = ({ links }) => {
  const location = useLocation();
  return (
    <Container>
      {links.map(({ icon, label, href }) => {
        let Icon = Icons[icon];
        const isActive = href === location.pathname;
        return (
          <MenuItem key={label}>
            <MenuLink href={href}>
              <Icon width="20px" fill={isActive ? "#34D399" : "#283045"} />
            </MenuLink>
          </MenuItem>
        );
      })}
    </Container>
  );
};

export default PanelBody;
