import React from "react";
import styled from "styled-components";



const Wrapper = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  background-color: #111827;
  outline: none;
  border: none;
  cursor: pointer;
`;

const Title = styled.h1`
  color: #34d399;
  font-size: 38px;
  font-weight: bold;
  margin-left: 16px;
`;

const Logo: React.FC = () => {
  return (
    <Wrapper>
      <StyledButton>
      </StyledButton>
      <Title>Snoi</Title>
    </Wrapper>
  );
};

export default Logo;
