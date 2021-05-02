import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-items: ceWnter;
  padding: 20px;
  width: calc(100vw - 96px);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 32px;
  justify-items: center;
`;

export const LeftGrid = styled.div``;
export const RigtGrid = styled.div``;

export const FormWrapper = styled.div``;

export const ItemForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 0;
`;

export const Label = styled.label`
  color: #d4d4d4;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  border-radius: 16px;
  background-color: #283045;
  border: none;
  outline: none;
  padding: 16px;
  box-sizing: border-box;
  color: #d4d4d4;
  font-size: 16px;
`;

export const ColumInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`;

export const FileWrapper = styled.div`
  background-color: #283045;
  border-radius: 16px;
  width: 100%;
  height: 344px;
  display: grid;
  place-items: center;
`;

export const SelectFile = styled.input``;

export const PriceWrapper = styled.div`
  position: relative;
`;

export const Price = styled.input`
  color: #d4d4d4;
  width: 100%;
  height: 92px;
  background-color: #283045;
  border: none;
  outline: none;
  border-radius: 16px;
  margin: 32px 0;
  padding: 8px;
  box-sizing: border-box;
  font-size: 48px;
`;

export const ConfluxIcon = styled.img`
  width: 40px;
  position: absolute;
  top: 48px;
  right: 48px;
`;