import styled from 'styled-components';

const AboutSectionStyle = `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
`;

export const Article = styled.article`
    text-align: left;
    z-index: 2;
    height: auto;
    @media (max-width: 800px) {
        height: auto;
        text-align: center;
    }
    & > * {
        opacity: 0;
        transform: translateY(25px)
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    box-shadow: 0px 0px 30px #66FCF1;
    opacity: 0;
    height: 70vh;
    width: auto;
    min-height: 350px;
    transform: translateX(25px);
    & > img {
        opacity: 0;
    }
    @media (max-width: 800px) {
        display: none;
    }
`;

export const Image = styled.img`
    height: 100%;
    width: auto;
    min-width: 100%;
`; 

export default AboutSectionStyle;