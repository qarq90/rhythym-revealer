import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Song from "./Song";
import "../styles/styles.css";
import MySVG from "./MySVG";
const Home = () => {
  const [searchBy, setSearchBy] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([
    {
      artistName: "",
      artistCover: "",
      songTitle: "",
      songCover: "",
      album: "",
      songDuration: "",
    },
  ]);
  const fetchHandler = async () => {
    let inputSong = document.getElementById("typed-song");
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search",
      params: { q: `${inputSong.value}` },
      headers: {
        "X-RapidAPI-Key": "58c61158b4msh9378a7744c948a6p19cb20jsnf067e4ff84b1",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
      const trackDetails = response.data.data[0];
      if (inputSong.value === "") {
        setShow(false);
      } else {
        setShow(true);
      }
      setData({
        ...data,
        artistCover: trackDetails.artist.picture_medium,
        songCover: trackDetails.album.cover_big,
        artistName: trackDetails.artist.name,
        songName: trackDetails.title_short,
        album: trackDetails.album.title,
        songDuration: trackDetails.duration,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const filterHandler = () => {
    setSearchBy(!searchBy);
    console.log(searchBy);
  };
  return (
    <>
      <StyledHome>
        <StyledTitle>Rhythm Revealer</StyledTitle>
        <StyledTop>
          <StyledInput
            id="typed-song"
            placeholder="Enter music name here..."
            type="text"
          />
          <StyledButtonDiv>
            <StyledButton
              className={searchBy ? "disabled" : "enabled"}
              onClick={filterHandler}
            >
              By Artist
            </StyledButton>
            <StyledButton
              className={searchBy ? "enabled" : "disabled"}
              onClick={filterHandler}
            >
              By Title
            </StyledButton>
            <StyledButton onClick={fetchHandler}>Search</StyledButton>
          </StyledButtonDiv>
        </StyledTop>
        <StyledBottom>
          <Song data={data} show={show} />
        </StyledBottom>
      </StyledHome>
    </>
  );
};

const StyledHome = styled.div`
  padding: 3rem 10rem;
  width: 80%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const StyledBottom = styled.h1`
  display: flex;
`;

const StyledButtonDiv = styled.h1`
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  width: 40%;
  height: 1.5rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  border-radius: 30px;
  color: ghostwhite;
  background-color: #1a1a1a;
  border: 2px solid #ff4081;
  margin: 0px auto 1rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  &:focus {
    outline: none;
  }
`;

const StyledTop = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto 4rem;
`;

const StyledButton = styled.div`
  width: 8.6%;
  margin: 0.2rem;
  border: 3px solid #ff4081;
  background-color: #ff4081;
  border-radius: 30px;
  padding: 0.2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.5s ease all;
  text-align: center;
  font-family: "Nunito", sans-serif;
  &:hover {
    width: 20%;
    letter-spacing: 10px;
  }
  &.enabled {
    background-color: #ff4081;
  }

  &.disabled {
    background-color: #1a1a1a;
  }
`;

export default Home;
