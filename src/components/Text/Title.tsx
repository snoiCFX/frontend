import React from 'react';
import styled from "styled-components";

export const StyledTitle = styled.h2`
  color: #d4d4d4;
  font-weight: 200;
  font-size: 48px;
`;


interface Props {
    text: string;
}

const Title: React.FC<Props> = ({ text }) => {
    return (
        <StyledTitle>{text}</StyledTitle>
    );
}

export default Title;