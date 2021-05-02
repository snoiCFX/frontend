import React, { useState } from "react";
import icon from "../../assets/statics/conflux-icon.png";
import { UploadButton } from "../../components/Button";
import { CardContainer } from "./components";
import { Title } from "../../components/Text";

import {
  Wrapper,
  Grid,
  LeftGrid,
  RigtGrid,
  FormWrapper,
  ItemForm,
  Label,
  Input,
  ColumInputs,
  FileWrapper,
  SelectFile,
  PriceWrapper,
  Price,
  ConfluxIcon
} from "./StyledItems";

import { PINATA_JWT } from "../../config/CONSTANTS";
import { pinFileToIpfs, pinJsonToIpfs } from "../../utils/pinataIpfs";
import useValidateForm from "../../hooks/useValidateForm";

const SingleSong = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(100);
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);

  const [sendButtonText, setSendButtonText] = useState("Upload File");
  const [isAudioUploaded, setIsAudioUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = useValidateForm(name, description, size, quantity, price);

  const resetForm = () => {
    setName("");
    setDescription("");
    setSize(0);
    setQuantity(100);
    setPrice(0);
    setIsAudioUploaded(false);
    setFile(null);
    setSendButtonText("Upload File");
  }

  const sendTransaction = async () => {
    try {
      let customHeader = new Headers();
      customHeader.append("Authorization", `Bearer ${PINATA_JWT}`);

      if (validateForm) {
        setIsLoading(true);
        setSendButtonText("Uploading File...");
        const audio = await pinFileToIpfs(customHeader, file);
        customHeader.append('Content-Type', 'application/json');

        setSendButtonText("Uploading Metadata...");
        const metadata = await pinJsonToIpfs(customHeader, name, description, audio);
        console.log(`ipfs://${metadata}`);

        setSendButtonText("Music Uploaded");
        setIsLoading(false);
        resetForm();
      }
    } catch (err) {
      console.error(err);
    }
  }

  const handleSelectChange = (e: any) => {
    setFile(e.target.files[0]);
    setSize(e.target.files[0].size);
    setIsAudioUploaded(true);
  }

  return (
    <Wrapper>
      <CardContainer>
        <Grid>
          <LeftGrid>
            <Title text="Sound Details"/>
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
                  <Label>Size</Label>
                  <Input style={{ color: "#34D399", opacity: 0.6 }} value={size} disabled />
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
              {
                !isAudioUploaded
                  ? <SelectFile
                    type="file"
                    onChange={handleSelectChange}
                    accept=".mp3"
                  />
                  : <audio controls>
                    <source src={URL.createObjectURL(file)} />
                  </audio>
              }


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
          isLoading={isLoading}
          center
          onClick={sendTransaction}
          isActive={validateForm}
          text={sendButtonText}
        />
      </CardContainer>
    </Wrapper>
  );
};

export default SingleSong;
