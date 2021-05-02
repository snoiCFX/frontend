import React from "react";
import styled from "styled-components";

import PanelBody from "./PanelBody";

import { PanelProps } from "./types";

const StyledPanel = styled.div`
  position: fixed;
  padding-top: 80px};
  top: 64px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  width: 56px;
  height: 100vh;
  transition: padding-top 0.2s, width 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  border-right: 2px solid rgba(133, 133, 133, 0.1);
  z-index: 11;
  overflow: initial;
  transform: translate3d(0, 0, 0);
  border-right: 2px solid rgba(133, 133, 133, 0.1);
`;

const Panel: React.FC<PanelProps> = ({ links }) => {
  return (
    <StyledPanel>
      <PanelBody links={links} />
    </StyledPanel>
  );
};

export default Panel;
