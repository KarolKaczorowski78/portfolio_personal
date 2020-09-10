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
    transition: .4s ease-out clip-path;
    clip-path: circle(${({ visible }) => visible ? '510px' : '0'} at 100% 0%);
    -webkit-clip-path: circle(${({ visible }) => visible ? '510px' : '0'} at 100% 0%);
    -moz-clip-path: circle(${({ visible }) => visible ? '510px' : '0'} at 100% 0%);
    @media (max-height: 470px) {
        top: 1px;
        right: 66px;
    }
    @media (max-height: 400px) {
        height: 300px;
    }
`;

type NavigationType = {
    visible: boolean,
}

export default Navigation;