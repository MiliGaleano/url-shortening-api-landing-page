import React, { useState } from 'react'
import styled from 'styled-components'
import {GlobalStyles} from './globalStyles'
import logo from '../assets/logo.svg'
import hamb from '../assets/icon-hamburger.svg'
import FirstSection, {Button} from './firstSection';
import SecondSection from './secondSection';
import ThirdSection from './thirdSection';
import FourthSection from './fourthSection';
import Footer, {ListTitle} from './footer'

const responsive = '@media (min-width: 650px)'

const Header = styled.div`
    width: 90%;
    margin-top: 30px;
    margin-left: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.img`
    width: 40%;

    ${responsive} {
        width: 10%;
    }
`;

const MenuIcon = styled.img`
    height: 20px;
    opacity: 0.5;
    z-index: 11;
    margin-bottom: 6px;

    ${responsive} {
        display: none;
    }
`;

const DivDesktop = styled.div`
    display: none;

    ${responsive} {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        }

        & div h1 {
            color: hsl(255, 11%, 22%);
            margin: 0;
            padding: 0;
            padding-right: 20px;

            &:hover{
                font-weight: 700;
                cursor: pointer;
            }
        }

        & div button {
            margin: 0;
            font-size: 0.8rem;
        }
    }
`;

const DivModal = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 10;
`;

const Modal = styled.div`
    margin-top: 60px;
    width: 90%;
    margin-left: 5%;
    background-color: hsl(257, 27%, 26%);
    padding: 20px;
    padding-bottom: 60px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Line = styled.hr`
    width: 80%;
    height: 1px;
    opacity: 0.1;
    margin-top: 25px;
`;

const Home = () => {

    const [showMenu, setShowMenu] = useState(false)

    return(
        <>
            <GlobalStyles showMenu={showMenu}/>
            {showMenu &&
            <DivModal>
                <Modal>
                    <ListTitle>Features</ListTitle>
                    <ListTitle>Pricing</ListTitle>
                    <ListTitle>Resources</ListTitle>
                    <Line></Line>
                    <ListTitle>Login</ListTitle>
                    <Button>Sign Up</Button>
                </Modal>
            </DivModal>
            }
            <Header>
                <Logo src={logo}></Logo>
                <MenuIcon src={hamb} onClick={()=> setShowMenu(!showMenu)}></MenuIcon>
                <DivDesktop>
                    <div>
                        <ListTitle>Features</ListTitle>
                        <ListTitle>Pricing</ListTitle>
                        <ListTitle>Resources</ListTitle>
                    </div>
                    <div>
                        <ListTitle>Login</ListTitle>
                        <Button>Sign Up</Button>
                    </div>
                </DivDesktop>
            </Header>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
            <ThirdSection></ThirdSection>
            <FourthSection></FourthSection>
            <Footer></Footer>
        </>
    )
}

export default Home