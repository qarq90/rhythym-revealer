import React from "react";
import styled from "styled-components";
import "../styles/styles.css";
import { motion } from "framer-motion";
import { scaleUp } from "./Animations";

const Song = ({ data, show }) => {
  const prevLink = data.songPrev;
  const songLength = Math.floor(data.songDuration / 60);
  const remainingSeconds = data.songDuration % 60;
  const prevHandler = () => {
    window.open(prevLink, "_blank");
  };
  return (
    <StyledSong
      variants={scaleUp}
      initial="initial"
      animate="show"
      className={`${show ? "text-show" : "text-hide"}`}
    >
      <StyledSongOuter>
        <StyledSongDiv variants={scaleUp}>
          <StyledCover variants={scaleUp} src={data.songCover} alt="" />
        </StyledSongDiv>
        <StyledSongDiv variants={scaleUp}>
          <StyledTitle
            variants={scaleUp}
            className={`${show ? "text-show" : "text-hide"}`}
          >
            Latest Title : {data.songName}
          </StyledTitle>
          <StyledInfo
            variants={scaleUp}
            className={`${show ? "text-show" : "text-hide"}`}
          >
            Album : {data.album}
          </StyledInfo>
          <StyledInfo
            variants={scaleUp}
            className={`${show ? "text-show" : "text-hide"}`}
          >
            Artist : {data.artistName}
          </StyledInfo>
          <StyledInfo
            variants={scaleUp}
            className={`${show ? "text-show" : "text-hide"}`}
          >
            Duration - {songLength}:{remainingSeconds}
          </StyledInfo>
          <StyledSongBtn
            variants={scaleUp}
            onClick={prevHandler}
            className={`${show ? "text-show" : "text-hide"}`}
            id="playButton"
          >
            Download Preview
          </StyledSongBtn>
        </StyledSongDiv>
        <StyledSongDiv variants={scaleUp}>
          <StyledArtistCover variants={scaleUp} src={data.artistCover} alt="" />
        </StyledSongDiv>
      </StyledSongOuter>
    </StyledSong>
  );
};

const StyledSong = styled(motion.div)`
  font-family: "Nunito", sans-serif;
  &.text-show {
    display: contents;
  }
  &.text-hide {
    display: none;
  }
`;

const StyledSongOuter = styled(motion.div)`
  display: flex;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    width: 90%;
  }`;

const StyledSongDiv = styled(motion.div)`
  width: 33%;
  text-align: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    //display: flex;
    //flex-direction: column;
    width: 90%;
  }
`;

const StyledSongBtn = styled(motion.button)`
  width: 50%;
  text-align: center;
  background-color: #1a1a1a;
  height: 5vh;
  font-family: "Nunito", sans-serif;
  font-weight: bolder;
  letter-spacing: 2px;
  border-radius: 10px;
  border: 2px #ff4081 solid;
  transition: 0.5s all ease;
  &:hover {
    letter-spacing: 3px;
    cursor: pointer;
    width: 60%;
    background-color: ghostwhite;
    border: 2px ghostwhite solid;
    color: #1a1a1a;
    font-weight: bolder;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 1rem;
    width: 90%;
  }
`;

const StyledTitle = styled(motion.h1)`
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const StyledInfo = styled(motion.h3)`
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const StyledCover = styled(motion.img)`
  width: 75%;
  border-radius: 30px;
`;

const StyledArtistCover = styled(motion.img)`
  width: 75%;
  border-radius: 100%;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-top: 3rem;
  }
`;

export default Song;
