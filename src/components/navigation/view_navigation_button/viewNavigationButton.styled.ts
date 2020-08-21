import styled from 'styled-components';

const ViewNavigationButton = styled.button`
    position: fixed;
    right: 15px;
    top: 15px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: 2px solid white;
    & > span {
        background: white;
        position: relative;
        width: 30px;
        height: 3px;
        border-radius: 10%;
        ::before, ::after {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            background: white;
            content: '';
        }
        ::before {
            bottom: 6px;
        }
        ::after {
            top: 6px;
        }
    }
`;

export default ViewNavigationButton;