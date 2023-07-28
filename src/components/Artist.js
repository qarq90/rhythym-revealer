import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { scaleUp } from "./Animations";

const Artist = ({ artist, show }) => {
  const prevLink = artist.duration;
  const prevHandler = () => {
    window.open(prevLink, "_blank");
  };
  console.log(artist);
  return (
    <StyledArtist>
      {artist.map((item) => {
        const songLength = Math.floor(item.duration / 60);
        const remainingSeconds = item.duration % 60;
        return (
          <React.Fragment key={item.id}>
            <StyledMapDiv
              variants={scaleUp}
              initial="initial"
              whileInView="show"
              exit="exit"
            >
              <StyledArtistDiv variants={scaleUp}>
                <StyledCover
                  variants={scaleUp}
                  src={item.album.cover_medium}
                  alt=""
                />
              </StyledArtistDiv>
              <StyledArtistDiv variants={scaleUp}>
                <StyledTitle
                  variants={scaleUp}
                  className={`${show ? "text-show" : "text-hide"}`}
                >
                  Title : {item.title}
                </StyledTitle>
                <StyledInfo
                  variants={scaleUp}
                  className={`${show ? "text-show" : "text-hide"}`}
                >
                  Artist : {item.artist.name}
                </StyledInfo>
                <StyledInfo
                  variants={scaleUp}
                  className={`${show ? "text-show" : "text-hide"}`}
                >
                  Album : {item.album.title}
                </StyledInfo>
                <StyledInfo
                  variants={scaleUp}
                  className={`${show ? "text-show" : "text-hide"}`}
                >
                  Duration - {songLength}:{remainingSeconds}
                </StyledInfo>
                <StyledSongBtn
                  variants={scaleUp}
                  onClick={() => prevHandler(item.duration)}
                  className={`${show ? "text-show" : "text-hide"}`}
                  id="playButton"
                >
                  Download Preview
                </StyledSongBtn>
              </StyledArtistDiv>
              <StyledArtistDiv variants={scaleUp}>
                <StyledArtistCover
                  variants={scaleUp}
                  src={item.artist.picture_medium}
                  alt=""
                />
              </StyledArtistDiv>
            </StyledMapDiv>
            <StyledBorder
              variants={scaleUp}
              initial="initial"
              whileInView="show"
              exit="exit"
            ></StyledBorder>
          </React.Fragment>
        );
      })}
    </StyledArtist>
  );
};

const StyledArtist = styled(motion.div)`
  width: 100%;
  text-align: center;
  font-family: "Nunito", sans-serif;
  &.text-show {
    display: contents;
  }
  &.text-hide {
    display: none;
  }
`;

const StyledMapDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBorder = styled(motion.div)`
  width: 100%;
  height: 0.5rem;
  margin: 3rem 0rem 4rem;
  border-radius: 10px;
  background: linear-gradient(to right, #ff4081, #1a1a1a);
`;

const StyledArtistDiv = styled(motion.div)`
  width: 33%;
  text-align: center;
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
`;

const StyledTitle = styled(motion.h1)`
  font-size: 2rem;
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
`;
export default Artist;
