import React from 'react'
import styled from 'styled-components'
import background from '../assets/bg-boost-mobile.svg'
import background2 from '../assets/bg-boost-desktop.svg'
import {Title, Button} from './firstSection'

const responsive = '@media (min-width: 650px)'

const DivFourth = styled.div`
    width: 100%;
    background: hsl(257, 27%, 26%) url(${background}) no-repeat top right;
    background-size: 100%;
    background-blend-mode: lighten;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    padding: 100px 0;

    ${responsive} {
        background: hsl(257, 27%, 26%) url(${background2}) no-repeat top right;
        background-size: cover;
    }
`;

export const WhiteTitle = styled(Title)`
    color: white;
    font-weight: 700;
    font-size: 1.1rem;

    ${responsive} {
        font-size: 3rem;
    }
`;

const FourthSection = () => {
    return(
        <DivFourth>
            <WhiteTitle>Boost your links today</WhiteTitle>
            <Button>Get Started</Button>
        </DivFourth>
    )
}

export default FourthSection