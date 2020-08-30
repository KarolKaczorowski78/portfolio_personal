import styled from 'styled-components';

interface StyledSectionProps {
    additionalStyle: string;
}

const SectionStyled = styled.section`
    width: 100vw;
    height: auto;
    min-height: 100vh;
    max-width: 100%;
    box-sizing: border-box;
    background: #1F2833;
    background: rgb(11, 12, 16);
    border: 1px solid grey;
`;

export default SectionStyled;


