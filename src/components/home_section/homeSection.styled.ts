import styled from 'styled-components';

export const HomeSectionStyle = `
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
    padding: 0;
    @media (min-width: 1200px) {
        z-index: 3;
    }
`;

export const SectionPiece = styled.div<ShitProps>`
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
    & > * {
        opacity: 0;
        transform: translateY(25px) translateX(25px);
    }
    @media (max-width: 749px) {
        width: 100vw;
        max-width: 100%;
        width: 100%;
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

export const H1 = styled.h1`
    color: #66FCF1;
    font-size: 4rem;
    font-family: Impact, Charcoal, sans-serif;
    display: block;
    margin: 0;
`;

export const HomeNavButton = styled.span`
    font-size: 4rem;
    color: black;
    text-shadow: 0px 0px 2px #66FCF1;
    font-family: Impact, Charcoal, sans-serif;
    &:hover {
        text-shadow: 0px 0px 5px #66FCF1;
        color: black;
        cursor: pointer;
    }
    ::before, ::after {
        content: none;
    }
`

export const Principle = styled(HomeNavButton)`  
    pointer-events: none;
    &::first-letter {
        color: #66FCF1;
    }
    @media(max-height: 400px) {
        font-size: 3rem;
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

export default HomeSectionStyle;