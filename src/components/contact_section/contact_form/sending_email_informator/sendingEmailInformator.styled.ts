import styled from 'styled-components';

const SendingEmailInformator = styled.div<props>`
    position: absolute;
    top: 10px;
    width: 90%;
    height: 250px;
    left: 50%;
    margin-left: -45%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 15px ${({ bgColor }) => bgColor};
    background: rgba(11, 12, 14, .9);
    color: ${({ bgColor }) => bgColor};
    visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
    & > svg {
        font-size: 50px;
    }
    & > button {
        width: 80px;
        height: 40px;
        padding: 5px 6px;
        font-weight: bold;
        border: 2px solid ${({ bgColor }) => bgColor};
        color: inherit;
        background: none;
    }
`;

type props = {
    bgColor: string;
    visible: boolean;
}

export default SendingEmailInformator;