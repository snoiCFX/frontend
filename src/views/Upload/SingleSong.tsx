import React, { useState, useEffect } from "react";
import styled from "styled-components";

import icon from "../../assets/statics/conflux-icon.png";
import { UploadButton } from "../../components/Button";

const Wrapper = styled.div`
  display: grid;
  place-items: ceWnter;
  padding: 20px;
  width: calc(100vw - 96px);
`;
const Contain = styled.div`
  background-color: #2a3a5e;
  border-radius: 16px;
  padding: 32px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 32px;
  justify-items: center;
`;

const LeftGrid = styled.div``;
const RigtGrid = styled.div``;

const Title = styled.h2`
  color: #d4d4d4;
  font-weight: 200;
  font-size: 48px;
`;

const FormWrapper = styled.div``;

const ItemForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 0;
`;
const Label = styled.label`
  color: #d4d4d4;
  font-weight: bold;
  margin-bottom: 16px;
`;
const Input = styled.input`
  border-radius: 16px;
  background-color: #283045;
  border: none;
  outline: none;
  padding: 16px;
  box-sizing: border-box;
  color: #d4d4d4;
  font-size: 16px;
`;

const ColumInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`;

const FileWrapper = styled.div`
  background-color: #283045;
  border-radius: 16px;
  width: 100%;
  height: 344px;
  display: grid;
  place-items: center;
`;

const SelectFile = styled.input``;

const PriceWrapper = styled.div`
  position: relative;
`;

const Price = styled.input`
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

const ConfluxIcon = styled.img`
  width: 40px;
  position: absolute;
  top: 48px;
  right: 48px;
`;

const SingleSong = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("2mb");
  const [duration, setDuration] = useState("2.2s");
  const [quantity, setQuantity] = useState(100);
  const [price, setPrice] = useState(0);
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    const checkValidForm =
      ((name !== "")
        && (description !== "")
        && (size !== "")
        && (duration !== "")
        && (quantity > 0)
        && (price > 0));
    
    setValidForm(checkValidForm);
  }, [name, description, size, duration, quantity, price])


  const sendAudio = () => {
    let hash;
    return hash;
  }

  const sendJsonObject = () => {
    return
  }

  const createTransaction = () => {
    return
  }

  const sendTransaction = () => {
    return
  }
 
  return (
    <Wrapper>
      <Contain>
        <Grid>
          <LeftGrid>
            <Title>Sound Details</Title>
            <FormWrapper>
              <ItemForm>
                <Label>Name</Label>
                <Input
                  onChange={(e) => setName(e.currentTarget.value)}
                  value={name}
                />
              </ItemForm>
              <ItemForm>
                <Label>Description</Label>
                <Input
                  onChange={(e) => setDescription(e.currentTarget.value)}
                  value={description}
                />
              </ItemForm>
              <ColumInputs>
                <ItemForm>
                  <Label>Duration</Label>
                  <Input value={duration} disabled />
                </ItemForm>
                <ItemForm>
                  <Label>Size</Label>
                  <Input value={size} disabled />
                </ItemForm>
                <ItemForm>
                  <Label>Quantity</Label>
                  <Input
                    type="number"
                    onChange={(e) =>
                      setQuantity(parseInt(e.currentTarget.value))
                    }
                    value={quantity}
                  />
                </ItemForm>
              </ColumInputs>
            </FormWrapper>
          </LeftGrid>
          <RigtGrid>
            <FileWrapper>
              <SelectFile type="file" />
            </FileWrapper>
            <PriceWrapper>
              <Price
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(parseInt(e.currentTarget.value))}
              />
              <ConfluxIcon src={icon} />
            </PriceWrapper>
          </RigtGrid>
        </Grid>
        <UploadButton
          isActive={validForm}
          text="Upload File"
        />
      </Contain>
    </Wrapper>
  );
};

export default SingleSong;
