import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import './App.css'
import styled from 'styled-components'
import Title from './components/Title'
import Character from './components/Character'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const CharContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(218, 223, 225, 0.15);
    border-radius: 25px;
    width: 40%;
    margin-left: 10%;
    margin-right: 10%;
    @media ${props => props.theme.mediumBreakPoint} {
      width: 75%;
      margin-left: 15%;
    };
  `

const ImageDiv = styled.div`
display: flex;
justify-content: space-between;


#sw1{
    width: 200px;
    height: 80vh;
    object-fit: cover;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);    
    border-radius: 25px;
    @media ${props => props.theme.mediumBreakPoint} {
      display: none;
    };
};
#sw2{
    width: 200px;
    height: 80vh;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    border-radius: 25px;
    @media ${props => props.theme.mediumBreakPoint} {
      display: none;
    };
};
`

  const [characters, setCharacters] = useState([])

  useEffect(() => {
      axios
          .get('https://swapi.dev/api/people/')
          .then((res) => {
              setCharacters(res.data)
          })
          .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <Title>React Wars</Title>
      <ImageDiv>
        <img src = 'https://cutewallpaper.org/21/star-wars-vertical-wallpaper/GameWallpapers.com-Search.jpg' alt='sw1' id='sw1'/>
        <CharContainer>
            {
              characters.map((char, idx) => {
                console.log('Testing:', char)
                return <Character name={char.name} key={idx} id={idx} birth={char.birth_year} />
              })
            }
        </CharContainer>
        <img src = 'https://cdn.statically.io/img/i.pinimg.com/originals/86/f3/ed/86f3ed0ece32d8c3ab44c3495949f8df.jpg' alt='sw2' id='sw2'/>
        

    </ImageDiv>  
          
    </div>
  )
}

export default App;
