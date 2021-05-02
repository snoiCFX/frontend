import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #2a3a5e;
  border-radius: 16px;
  padding: 32px;
`;

const CardContainer: React.FC = ({ children }) => {
    return <Wrapper>{children}</Wrapper>
}

export default CardContainer;