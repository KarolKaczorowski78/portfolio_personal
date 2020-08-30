import styled from 'styled-components';
import Section from '../section/section.styled';

const HomeSection = styled(Section)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    @media (min-width: 1200px) {
        z-index: 3;
    }
`;

export const Shit = styled.div<ShitProps>`
    max-width: 100%;
    position: relative;
    height: auto;
    min-height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 30px;
    background: rgba(11, 12, 16, ${({ backgroundOpacity }) => backgroundOpacity});
    color: white;
    font-family: "Comic Sans MS", cursive, sans-serif;
    box-sizing: border-box;
    @media (max-width: 749px) {
        width: 100vw;
        &:nth-of-type(2), &:nth-of-type(3) {
            display: none;
        }
    }

    @media only screen and (min-width: 750px) and (max-width: 1199px) {
        width: 50vw;
        &:nth-of-type(3) {
            display: none;
        }
    }
    @media (min-width: 1200px) {
        width: 33.3vw;
    }
`;

export const H1 = styled.span`
    color: #66FCF1;
    font-size: 4rem;
    font-family: Impact, Charcoal, sans-serif;
    display: block;
`;

export const HomeNavButton = styled(H1)`
    transition: .3s ease-out;
    color: #0B0C10;
    text-shadow: 0px 0px 2px #66FCF1;
    &:hover {
        text-shadow: 0px 0px 5px #66FCF1;
        color: black;
        cursor: pointer;
    }
`

export const Principle = styled(HomeNavButton)`  
    pointer-events: none;
    &::first-letter {
        color: #66FCF1;
    }
`;

export const H3 = styled.h1`
    color: #C5C6C7;
    color: white;
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 1.6rem;
`;

export const P = styled.p`
    color: white;
    font-size: 1.15rem;
    max-width: 50ch;
    display: block;
    span {
        color: #66FCF1;
    }
`;

type ShitProps = {
    backgroundOpacity: string,
}

export default HomeSection;