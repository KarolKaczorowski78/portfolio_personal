import styled from 'styled-components';

const Navigation = styled.nav<NavigationType>`
    position: fixed;
    top: 70px;
    right: 15px;
    width: 300px;
    height: 400px;
    border: 2px solid grey;
    text-align: center;
    visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
`;

type NavigationType = {
    visible: boolean,
}

export default Navigation;