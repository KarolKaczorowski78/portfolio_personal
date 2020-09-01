import styled from 'styled-components';
import Section from '../section/section.styled';

const SkillsSection = styled(Section)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    height: auto;
`;

export const SkillsChartContainer = styled.div`
    width: 90vw;
    width: auto;
    max-width: 700px;
    height: auto;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-evenly;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const SkillSectionStyle = `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    height: auto;
    & > span {
        transform: translateY(30px);
        opacity: 0;
    }
`;

export default SkillsSection;