import styled from 'styled-components';

const SectionStyled = styled.section<{ additionalStyle: string }>`
    width: 100vw;
    height: auto;
    min-height: 100vh;
    max-width: 100%;
    box-sizing: border-box;
    background: #1F2833;
    background: rgb(11, 12, 16);
    border: 1px solid grey;
    padding: 15px;
    ${({ additionalStyle }) => additionalStyle};
`;

export default SectionStyled;


