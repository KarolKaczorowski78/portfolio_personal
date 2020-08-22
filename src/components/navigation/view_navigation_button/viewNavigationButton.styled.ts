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
    border: 2px solid grey;
    & > span {
        background: grey;
        position: relative;
        width: 30px;
        height: 4px;
        border-radius: 15%;
        ::before, ::after {
            border-radius: inherit;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            background: grey;
            content: '';
        }
        ::before {
            bottom: 7px;
        }
        ::after {
            top: 7px;
        }
    }
`;

export default ViewNavigationButton;