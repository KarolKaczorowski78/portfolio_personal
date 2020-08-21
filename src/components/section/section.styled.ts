import styled from 'styled-components';

type SectionType = {
    additionalStyle: string,
}

const SectionStyled = styled.section`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    box-sizing: border-box;
    background: red;
    border: 2px solid white;
`;

export default SectionStyled;


