import styled from 'styled-components';

const ViewNavigationButton = styled.button<props>`
    position: fixed;
    right: 15px;
    top: 15px;
    width: 50px;
    height: 50px;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    z-index: 3;
    & > span {
        &, ::before, ::after {
            transition: .35s;
        }
        background: #66FCF1;
        background: ${({ navVisibility }) => navVisibility ? 'rgba(0, 0, 0, 0)' : '#66FCF1'};
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
            opacity: 1;
        }
        ::before {
            bottom: 8px;
            bottom: ${({ navVisibility }) => navVisibility ? '0' : '8px'};
            transform: ${({ navVisibility }) => navVisibility ? 'rotate(-45deg)' : 'none'}
        }
        ::after {
            top: 8px;
            top: ${({ navVisibility }) => navVisibility ? '0' : '8px'};
            transform: ${({ navVisibility }) => navVisibility ? 'rotate(45deg)' : 'none'}
        }
    }
`;

type props = {
    navVisibility: boolean;
}

export default ViewNavigationButton;