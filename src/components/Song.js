import React from "react";
import styled from "styled-components";
import "../styles/styles.css";
const Song = ({ data, show }) => {
  const songLength = Math.floor(data.songDuration / 60);
  const remainingSeconds = data.songDuration % 60;
  return (
    <StyledSong className={`${show ? "text-show" : "text-hide"}`}>
      <StyledSongDiv>
        <StyledCover src={data.songCover} alt="" />
      </StyledSongDiv>
      <StyledSongDiv>
        <StyledTitle className={`${show ? "text-show" : "text-hide"}`}>
          Title : {data.songName}
        </StyledTitle>
        <StyledInfo className={`${show ? "text-show" : "text-hide"}`}>
          Artist : {data.artistName}
        </StyledInfo>
        <StyledInfo className={`${show ? "text-show" : "text-hide"}`}>
          Duration - {songLength}:{remainingSeconds}
        </StyledInfo>
        <StyledInfo className={`${show ? "text-show" : "text-hide"}`}>
          Album : {data.album}
        </StyledInfo>
      </StyledSongDiv>
      <StyledSongDiv>
        <StyledArtistCover src={data.artistCover} alt="" />
      </StyledSongDiv>
    </StyledSong>
  );
};

const StyledSong = styled.div`
  display: flex;
  font-family: "Nunito", sans-serif;
  &.text-show {
    display: contents;
  }
  &.text-hide {
    display: none;
  }
`;

const StyledSongDiv = styled.div`
  width: 33%;
  text-align: center;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const StyledInfo = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const StyledCover = styled.img`
  width: 75%;
  border-radius: 30px;
`;

const StyledArtistCover = styled.img`
  width: 75%;
  border-radius: 100%;
`;

export default Song;
