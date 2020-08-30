import styled from 'styled-components';
import Section from '../section/section.styled';

const ProjectsSection = styled(Section)`
    text-align: center;
    padding-top: 20px;
    @media(max-width: 800px) {
        height: auto;
        align-items: center;
    }
`;


export default ProjectsSection;