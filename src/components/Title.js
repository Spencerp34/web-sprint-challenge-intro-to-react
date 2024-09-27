import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
    color: ${props => props.theme.firstColor};
`

const Title = (props) => {
    // console.log(props)
    return (
        <> 
        <Header>React Wars</Header>
        </>
    )
}

export default Title