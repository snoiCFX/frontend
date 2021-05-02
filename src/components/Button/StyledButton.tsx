import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 16px;
  background-color: #283045;
  color: #d4d4d4;
  font-size: 22px;
  font-weight: bold;
  border-radius: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

export default StyledButton;
