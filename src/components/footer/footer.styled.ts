import styled from 'styled-components';

const Footer = styled.footer`
    width: 100%;
    height: 100px;
    text-align: center;
    position: relative;
    background: rgb(11, 25, 35);
    color: white;
    text-transform: uppercase;
    min-width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > span {
        width: 90%;
    }
    a {
        color: #66FCF1;
    }
`;

export default Footer;