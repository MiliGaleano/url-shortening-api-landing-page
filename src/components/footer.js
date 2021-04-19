import React from 'react'
import styled from 'styled-components'
import {WhiteTitle} from './fourthSection'
import media1 from '../assets/icon-facebook.svg'
import media2 from '../assets/icon-twitter.svg'
import media3 from '../assets/icon-pinterest.svg'
import media4 from '../assets/icon-instagram.svg'

const responsive = '@media (min-width: 650px)'

const DivFooter = styled.div`
    width: 100%;
    background-color: hsl(260, 8%, 14%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 0;

    ${responsive} {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: flex-start;
    }
`;

export const ListTitle = styled(WhiteTitle)`
        font-weight: 500;
        font-size: 0.8rem;
        margin-top:40px;
        margin-bottom: 12px;

        ${responsive} {
            margin-top:0;
    }
    `;

const List = styled.ul`
    text-align: center;

    & li {
        font-weight: 300;
        font-size: 0.7rem;
        color: white;
        padding: 6px;
        text-align: center;

        &:hover{
        color: hsl(180, 66%, 49%);
        cursor: pointer;
        }
    }
`;

const MediaDiv = styled.div`
    margin-top: 50px;
    width:70%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    ${responsive} {
        width: 30%;
        align-items: flex-start;
        margin-top: 0;
    }
`;

const MediaIcons = styled.img`
    width: 12%;

    ${responsive} {
        width: 8%;

        &:hover{
        opacity: 0.8;
        cursor: pointer;
        }
    }
`;

const Footer = () => {
    return(
        <DivFooter>
            <WhiteTitle>Shortly</WhiteTitle>
            <List>
                <ListTitle>Features</ListTitle>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </List>
            <List>
                <ListTitle>Resources</ListTitle>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
            </List>
            <List>
                <ListTitle>Company</ListTitle>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
            </List>
            <MediaDiv>
                <MediaIcons src={media1}></MediaIcons>
                <MediaIcons src={media2}></MediaIcons>
                <MediaIcons src={media3}></MediaIcons>
                <MediaIcons src={media4}></MediaIcons>
            </MediaDiv>
        </DivFooter>
    )
}

export default Footer