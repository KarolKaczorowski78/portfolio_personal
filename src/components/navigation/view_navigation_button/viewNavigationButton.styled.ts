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
    border: none;
    z-index: 3;
    & > span {
        background: #66FCF1;
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
            background: #66FCF1;
            content: '';
        }
        ::before {
            bottom: 8px;
        }
        ::after {
            top: 8px;
        }
    }
`;

export default ViewNavigationButton;