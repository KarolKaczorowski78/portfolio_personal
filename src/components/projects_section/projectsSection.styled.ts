import styled from 'styled-components';
import Section from '../section/section.styled';

const ProjectsSection = styled(Section)`
    height: auto;
    min-height: 100vh;
    text-align: center;
    padding-top: 20px;
    @media(max-width: 800px) {
        height: auto;
        align-items: center;
    }
`;


export default ProjectsSection;