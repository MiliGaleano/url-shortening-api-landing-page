import React from 'react'
import styled from 'styled-components'
import {Text, Title} from './firstSection'
import icon1 from '../assets/icon-brand-recognition.svg'
import icon2 from '../assets/icon-detailed-records.svg'
import icon3 from '../assets/icon-fully-customizable.svg'

const responsive = '@media (min-width: 650px)'

const DivThird = styled.div`
    width: 100%;
    background-color: hsla(0, 0%, 75%, 0.4);
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-bottom: 100px;
`;

const NewTitle = styled(Title)`
    font-size: 1.2rem;
    margin-top: 100px;
`;

const Stick = styled.div`
    width: 8px;
    background-color:hsl(180, 66%, 49%);
    position: absolute;
    height: 100px;
    margin-bottom:450px;
    z-index:-1;

    ${responsive} {
        width: 25%;
        height: 8px;
        margin-bottom: 0px;
        margin-right: 15%;
    }
`;

const DivDesktopCards = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    ${responsive} {
        display:flex;
        flex-direction: row;
        width: 90%;
        margin-left: 5%;
        justify-content: space-between;
        }
`;

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-left: 5%;

    ${responsive} {
        width: 30%;
        margin-top: ${props => props.second ? '50px' : props.third ? '100px' : 0};
        margin-left: 0;
    }
`;

const CircleIcon = styled.div`
    width: 120px;
    height: 120px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 60px;
    border-radius: 50%;
    background-color: hsl(257, 27%, 26%);
    display:flex;
    justify-content: center;
    align-items: center;

    ${responsive} {
        /* margin-left: auto; */
        margin-right: 60%;
    }
`;

const Icons = styled.img`
    width: 46%;
`;

const DivCards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 6px;
    padding: 20px;
    padding-bottom:40px;
`;

const CardTitle = styled(NewTitle)`
    margin-top: 90px;
`;

const ThirdSection = () => {
    return(
        <DivThird>
            <NewTitle>Advanced Statistics</NewTitle>
            <Text>Track how your links are performing across the web with our advanced statistics dashboard.</Text>
            <DivDesktopCards>
                <CardDiv>
                    <CircleIcon>
                        <Icons src={icon1}></Icons>
                    </CircleIcon>
                    <DivCards>
                        <CardTitle>Brand Recognition</CardTitle>
                        <Text>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</Text>
                    </DivCards>
                </CardDiv>
                <CardDiv second>
                    <CircleIcon>
                        <Icons src={icon2}></Icons>
                    </CircleIcon>
                    <DivCards>
                        <Stick></Stick>
                        <CardTitle>Detailed Records</CardTitle>
                        <Text>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</Text>
                    </DivCards>
                </CardDiv>
                <CardDiv third>
                    <CircleIcon>
                        <Icons src={icon3}></Icons>
                    </CircleIcon>
                    <DivCards>
                        <Stick></Stick>
                        <CardTitle>Fully Customizable</CardTitle>
                        <Text>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</Text>
                    </DivCards>
                </CardDiv>
            </DivDesktopCards>
        </DivThird>
    )
}

export default ThirdSection