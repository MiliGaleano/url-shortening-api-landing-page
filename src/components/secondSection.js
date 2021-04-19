import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import background from '../assets/bg-shorten-mobile.svg'
import background2 from '../assets/bg-shorten-desktop.svg'
import {GetShortenUrl} from '../services/getUrl'
import { DivSection } from './firstSection'

const responsive = '@media (min-width: 650px)'

const DivSecondSec = styled.div`
    background-color: hsla(0, 0%, 75%, 0.4);
    margin-top: 200px;
`;

const URLdiv = styled.div`
    position: relative;
    bottom: 80px;
    width: 90%;
    height: 170px;
    margin-left: 5%;
    background: hsl(257, 27%, 26%) url(${background}) no-repeat top right;
    background-size: 80%;
    background-blend-mode: lighten;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;

    ${responsive} {
    background: hsl(257, 27%, 26%) url(${background2}) no-repeat top right;
    background-size: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-evenly;
    }
`;

    const InputURL = styled.input`
        width: 90%;
        height: 50px;
        border: none;
        border-radius: 6px;
        font-weight: 500;
        padding-left: 10px;
        outline: none;

        ${responsive} {
            width: 70%;
        }
    `;

    const InputButton = styled.button`
    width: 90%;
    height: 50px;
    color: white;
    font-weight: 500;
    background-color: hsl(180, 66%, 49%);
    border: none;
    border-radius: 6px;

    &:focus{
        outline: none;
    }

    ${responsive} {
            width: 20%;

            &:hover{
                background-color: hsla(180, 66%, 49%, 0.8);
                cursor: pointer;
            }
        }
    `;

    const RedMessage = styled.p`
        color: hsl(0, 87%, 67%);
        text-align: left;
        width: 90%;
    `;

    const DivShortened = styled.div`
        width: 90%;
        margin-left: 5%;
        margin-top: 20px;
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 20px 0;

        ${responsive} {
        flex-direction: row;
        }
    `;

    const InputShortened = styled.input`
        border:none;
        background-color: white;
        width: 90%;

        ${responsive} {
            width: 60%;
        }
    `;

    const LinkShortened = styled.p`
        color: hsl(180, 66%, 49%);
    `;

    const CopyButton = styled(InputButton)`
    width: 90%;
    height: 30px;
    color: white;
    font-weight: 500;
    background-color: hsl(180, 66%, 49%);
    border: none;
    border-radius: 6px;

    ${responsive} {
            width: 10%;

            &:hover{
                background-color: hsla(180, 66%, 49%, 0.8);
                cursor: pointer;
            }
        }
    `;

const SecondSection = () => {

    const [userUrl, setUserUrl] = useState('')
    const [message, setMessage] = useState()
    const [listOfUrls, setListOfUrl] = useState([])

    const handleUrl = (e) => {
        setUserUrl(e.target.value)
    }

    const handleCopy = (x) => {
        navigator.clipboard.writeText(x)
    }

    const handleClick = () => {
        setMessage('Working on it!')
        GetShortenUrl(userUrl)
        .then(res => {
            if (res.result.short_link) {
                let newUrl = {
                    large:userUrl,
                    short:res.result.short_link
                }
                setListOfUrl(listOfUrls.concat(newUrl))
                setMessage(false)
            } else {
            console.log(res)
            setMessage('Something went wrong, please try again.')
            }
        })
        .catch(()=> setMessage('Something went wrong, please try again.'))
    }

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('localList'))
        console.log(list)
        if (list) {
            setListOfUrl(list)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('localList', JSON.stringify(listOfUrls))
    }, [listOfUrls])

    return(
        <DivSecondSec>
            <URLdiv>
                <InputURL type='text' placeholder='Shorten a link here...' onChange={handleUrl}></InputURL>
                <InputButton onClick={handleClick}>Shorten It!</InputButton>
                {message && <RedMessage>{message}</RedMessage>}
            </URLdiv>
            {listOfUrls.length !== 0 && 
                listOfUrls.map((url) =>
                <DivShortened key={url.short}>
                    <InputShortened type='text' placeholder={url.large} readOnly></InputShortened>
                    <LinkShortened>{url.short}</LinkShortened>
                    <CopyButton onClick={() =>  handleCopy(`${url.short}`)} >Copy</CopyButton>
                </DivShortened>
                )
            }
        </DivSecondSec>
    )
}

export default SecondSection