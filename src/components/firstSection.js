import React from 'react'
import styled from 'styled-components'
import illus from '../assets/illustration-working.svg'

const responsive = '@media (min-width: 650px)'

export const DivSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    overflow-x: hidden;

    ${responsive} {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }
`;

const Illus = styled.img`
    position:relative;
    left: 10%;
    width: 130%;

    ${responsive} {
        width: 60%;
        height: auto;
        margin-left: 20px;
        margin-top: 30px;
    }
`;

const DivText = styled.div`
    width: 90%;
    margin-left: 5%;
    text-align: center;
    margin-top: 30px;

    ${responsive} {
        margin-left: 5%;
        text-align: left;
    }
`;

export const Title = styled.h1`
    color:hsl(255, 11%, 22%);
    font-weight: 800;
    font-size: 2rem;

    ${responsive} {
        font-size: 3rem;
    }
`;

export const Text = styled.p`
    color: hsl(257, 7%, 63%);
    font-weight: 300;
    margin-top: 15px;
    border: none;
`;

export const Button = styled.button`
    margin-top: 25px;
    color: white;
    font-weight: 500;
    background-color: hsl(180, 66%, 49%);
    border: none;
    border-radius: 60px;
    padding: 10px 25px;

    &:hover{
        background-color: hsla(180, 66%, 49%, 0.8);
        cursor: pointer;
    }
`;

const FirstSection = () => {
    return(
        <DivSection>
            <Illus src={illus}></Illus>
            <DivText>
                <Title>More than just shorter links</Title>
                <Text>Build your brand’s recognition and get detailed insights on how your links are performing.</Text>
                <Button>Get Started</Button>
            </DivText>
        </DivSection>
    )
}

export default FirstSection