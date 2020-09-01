import styled, { keyframes } from 'styled-components';

const flashing = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0
    }
`

const Writer = styled.code`
    font-size: 1.1rem;
    color: yellow;
    color: #66FCF1;
    color: rgb(255,0,255);
    color: lime;
    text-shadow: 0 0 7px #66FCF1;
    & > span:nth-of-type(2) {
        animation: ${flashing} 1s ease-in-out infinite;
    }
`;

export default Writer;