// Write your Character component here
import React from 'react';
import styled from 'styled-components'


const StyledDiv = styled.div`
  color: ${props => props.theme.firstColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 3px solid rgba(252, 163, 17, 0.5);
  /* #5 border-bottom: none; */
  
  
`
const StyledH1 = styled.h1`
  margin-left: 5%;
`

const StyledYear = styled.h2`
  margin-right: 5%;
`

const Character = props => {
    // console.log(props)

  return (
     <StyledDiv id={props.id} >
        <StyledH1>{props.name}</StyledH1>
        <StyledYear>{props.birth}</StyledYear>
    </StyledDiv>
        
  );
}
export default Character;