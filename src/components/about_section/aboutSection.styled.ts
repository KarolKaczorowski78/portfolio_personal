import styled from 'styled-components';
import Section from '../section/section.styled';

const AboutSection = styled(Section)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    padding: 0 15px;
    & > * {
        height: 70vh;
        width: auto;
    }
`;

export const Article = styled.article`
    text-align: left;
    z-index: 2;
    @media (max-width: 800px) {
        height: auto;
        text-align: center;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    box-shadow: 0px 0px 30px #66FCF1;
    @media (max-width: 800px) {
        display: none;
    }
`;

export const Image = styled.img`
    height: 100%;
    width: auto;
    min-width: 100%;
`; 

export default AboutSection;