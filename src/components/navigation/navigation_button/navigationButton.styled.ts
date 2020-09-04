import styled from 'styled-components';

const NavButton = styled.button<NavButtonProps>`
    width: 300px;
    height: 80px;
    font: 1.8rem monospace;
    color: #66FCF1;
    border: none;
    background: none;
    position: relative;
    & > span {
        position: relative;
        width: 100%;
        display: block;
        height: .000001px;
        display: flex;
        justify-content: center;
        align-items: center;
        ::after, ::before {
            transition: .3s ease-out;
        }
        svg {
            transition: .4s ease-out;
            opacity: 0;
        }
        ::after, ::before {
            height: .9rem;
            left: 0;
            width: 100%;
            position: absolute;
            text-align: center;
            overflow: hidden;
            content: '${({ content }) => content}';
        }
        ::before {
            top: -.9rem;
        }
        ::after {
            bottom: -.9rem;
            line-height: .2rem;
        }
    }
    &:hover {
        & > span {
            ::before {
                transform: translateY(-15px);
                opacity: 0;
            }
            ::after {
                transform: translateY(15px);
                opacity: 0;
            }
            & > svg {
                opacity: 1;
            }
        }
    }
    @media (max-height: 400px) {
        height: 60px;
    }
`;

type NavButtonProps = {
    content: string,
}

export default NavButton;