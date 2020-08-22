import styled from 'styled-components';

interface StyledSectionProps {
    additionalStyle: string;
}

const SectionStyled = styled.section`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    box-sizing: border-box;
    background: ghostwhite;
    border: 2px solid grey;
`;

export default SectionStyled;


