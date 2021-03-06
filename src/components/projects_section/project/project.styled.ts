import styled from 'styled-components';

const Project = styled.div`
    position: relative;
    display: inline-block;
    height: 75vh;
    width: auto;    
    margin: 30px;
    max-width: 95vw;
    min-height: 350px;
    box-sizing: border-box;
    border: 2px solid #66FCF1;
    opacity: 0;
    transform: translateY(30px);
    & > img {
        height: 100%;
        width: auto;
        pointer-events: none;
    }
    &:hover div {
        clip-path: circle(1000px at 50% 50%);
    }
    @media (max-width: 450px) {
        width: 95%;
        height: auto;
        margin: 2.5%;
        & > img {
            width: 100%;
            height: auto;
            pointer-events: none;
        }
    }
`;

export const ProjectDetails = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    clip-path: circle(0px at 50% 50%);
    background: rgba(11, 12, 14, .6);
    transition: 1s clip-path;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    & > h1 {
        font-size: 2rem;
        color: #66FCF1;
        font-family: Impact, Charcoal, sans-serif;
        margin-bottom: 10% autol
    }
    & > p {
        margin: 0 auto;
        font-size: 12px;
        color: white;
        font-family: cursive;
        max-width: 200px;
        @media (max-height: 550px) {
            display: none;
        }
    }
    img {
        height: 50px;
        width: auto;
        @media (max-height: 550px) {
            height: 35px;
        }
    }
    h1, p, img {
        user-select: none;
    }
`;

export default Project;