import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";
import Song from "./Song";
import "../styles/styles.css";
import Artist from "./Artist";
import {motion} from "framer-motion";
import {scaleUp} from "./Animations";
const Home = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = process.env.REACT_APP_API_URL;
    const [searchBy, setSearchBy] = useState(false);
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);
    const [artist, setArtist] = useState([]);
    const fetchHandler = async () => {
        let inputSong = document.getElementById("typed-song");

        const optionsTitle = {
            method: "GET",
            url: "https://deezerdevs-deezer.p.rapidapi.com/search",
            params: {q: `${inputSong.value}`},
            headers: {
                'X-RapidAPI-Key': `${apiKey}`,
                'X-RapidAPI-Host': `${apiUrl}`
            },
        };
        try {
            const response = await axios.request(optionsTitle);
            console.log(response.data);
            if (inputSong.value === "") {
                setShow(false);
            } else {
                setShow(true);
            }
            setData({
                ...data,
                artistCover: response.data.data[0].artist.picture_medium,
                songCover: response.data.data[0].album.cover_big,
                artistName: response.data.data[0].artist.name,
                songName: response.data.data[0].title_short,
                album: response.data.data[0].album.title,
                songDuration: response.data.data[0].duration,
                songPrev: response.data.data[0].preview,
            });
        } catch (error) {
            console.error(error);
        }

        const optionsArtist = {
            method: "GET",
            url: "https://deezerdevs-deezer.p.rapidapi.com/search",
            params: {q: `${inputSong.value}`},
            headers: {
                'X-RapidAPI-Key': `${apiKey}`,
                'X-RapidAPI-Host': `${apiUrl}`
            },
        };

        try {
            const response = await axios.request(optionsArtist);
            console.log(response.data);
            const top10Artists = response.data.data.slice(0, 25);
            console.log(top10Artists);
            if (inputSong.value === "") {
                setShow(false);
            } else {
                setShow(true);
            }

            setArtist(Array.from(top10Artists));
        } catch (error) {
            console.error(error);
            console.log(process.env.REACT_APP_API_KEY);
        }
    };

    const filterHandler = () => {
        setSearchBy(!searchBy);
        console.log(searchBy);
    };
    const clearHandler = () => {
        let inputSong = document.getElementById("typed-song");
        inputSong.value = "";
    };
    return (
        <StyledHome variants={scaleUp} initial="initial" animate="show">
            <StyledTitle variants={scaleUp}>
                R<span>h</span>y<span>t</span>h<span>m</span> R<span>e</span>v
                <span>e</span>a<span>l</span>e<span>r</span>
            </StyledTitle>
            <StyledTop variants={scaleUp}>
                <StyledInput
                    variants={scaleUp}
                    id="typed-song"
                    placeholder="Type here..."
                    type="text"
                />
                <StyledButtonDiv>
                    <StyledButton
                        variants={scaleUp}
                        className={searchBy ? "disabled" : "enabled"}
                        onClick={filterHandler}
                    >
                        By Artist
                    </StyledButton>
                    <StyledButton
                        variants={scaleUp}
                        className={searchBy ? "enabled" : "disabled"}
                        onClick={filterHandler}
                    >
                        By Title
                    </StyledButton>
                    <StyledButton variants={scaleUp} onClick={fetchHandler}>
                        Search
                    </StyledButton>
                    <StyledButton variants={scaleUp} onClick={clearHandler}>
                        Clear
                    </StyledButton>
                </StyledButtonDiv>
            </StyledTop>
            <StyledBottom variants={scaleUp}>
                {searchBy ? (
                    <Song data={data} show={show}/>
                ) : (
                    <Artist artist={artist} show={show}/>
                )}
            </StyledBottom>
        </StyledHome>
    );
};

const StyledHome = styled(motion.div)`
  padding: 3rem 10rem;
  width: 80%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-left: -7rem;
  }
`;

const StyledTitle = styled(motion.p)`
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Boogaloo", cursive;
  font-size: 3rem;
  letter-spacing: 15px;
  animation: opacityB infinite linear 3s;
  font-weight: bolder;

  span {
    animation: opacityA infinite linear 3s;
    color: #ff4081;
    font-weight: lighter;
  }

  @keyframes opacityA {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0.5;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes opacityB {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    color: #1a1a1a;
    span {
      color: ghostwhite;
    }
  }
`;

const StyledBottom = styled(motion.h1)`
  display: flex;
`;

const StyledButtonDiv = styled(motion.h1)`
  display: flex;
  justify-content: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
  }
`;

const StyledInput = styled(motion.input)`
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

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 90%;
  }
`;

const StyledTop = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 0px auto 4rem;
`;

const StyledButton = styled(motion.div)`
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
    animation: flash infinite linear 2s;
  }

  &.enabled {
    background-color: #ff4081;
    animation: flash infinite linear 2s;
  }

  &.disabled {
    background-color: #ff4081;
  }

  @keyframes flash {
    0% {
      background-color: #1a1a1a;
    }
    25% {
      background-color: #ff4081;
    }
    50% {
      background-color: #1a1a1a;
    }
    75% {
      background-color: #ff4081;
    }
    100% {
      background-color: #1a1a1a;
    }
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 90%;
  }
`;

export default Home;
