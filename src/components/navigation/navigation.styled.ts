import styled from 'styled-components';

const Navigation = styled.nav<NavigationType>`
    position: fixed;
    top: 70px;
    right: 15px;
    width: 300px;
    height: 400px;
    border: 2px solid #66FCF1;
    text-align: center;
    z-index: 3;
    background: #0B0C10;
    display: ${({ visible }) => visible ? 'block' : 'none'};
`;

type NavigationType = {
    visible: boolean,
}

export default Navigation;