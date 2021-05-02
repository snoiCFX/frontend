import React, { useState } from "react";
import styled from "styled-components";
import { SingleSong, Album } from "./Upload";
import { Button } from "../components/Button";
import { AlbumIcon, SingleSongIcon } from "../components/Svg";

const Wrapper = styled.div`
  width: calc(100vw - 56px);
  height: calc(100vh - 64px);
  display: grid;
  place-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #2a3a5e;
  border-radius: 16px;
  padding: 1rem;
  height: 300px;
  width: 300px;
`;

const Title = styled.h1`
  color: #d4d4d4;
  font-weight: 200;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterCard = styled.p`
  font-weight: 200;
  a {
    color: #34d399;
  }
`;

const UploadDetails = () => {
  const [uploadStatus, setUploadState] = useState(0);

  if (uploadStatus === 0)
    return (
      <Wrapper>
        <CardWrapper>
          <Title>Uploading Options</Title>
          <SectionWrapper>
            <Button
              onClick={() => setUploadState(1)}
              text="Single Song"
              icon={<SingleSongIcon height={22} fill="#34D399" />}
            />
            <Button
              text="Upload Album"
              icon={<AlbumIcon height={22} fill="#34D399" />}
            />
          </SectionWrapper>
          <FooterCard>
            By uploading this files or album you accept this{" "}
            <a href="#">terms</a> and <a href="#">conditions</a>.
          </FooterCard>
        </CardWrapper>
      </Wrapper>
    );
  else if (uploadStatus === 1) return <SingleSong />;
  else if (uploadStatus === 2) return <Album />;
};

export default UploadDetails;
