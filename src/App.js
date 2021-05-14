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
    margin-left: 30%;
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
          <CharContainer>
            {
              characters.map((char, idx) => {
                // console.log('Testing:', char)
                return <Character name={char.name} key={idx} id={idx} birth={char.birth_year} />
              })
            }
          </CharContainer>
    </div>
  )
}

export default App;
