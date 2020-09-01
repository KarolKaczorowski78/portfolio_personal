import styled from 'styled-components';

const MainFeature = styled.div`
    width: 110px;
    height: 110px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10%;
    border: 2px solid #66FCF1;
    box-sizing: border-box;
    margin: 0 10px;
    text-align: center;
    color: #66FCF1;
    & > svg {
        font-size: 40px;
    }
    @media (max-width: 400px), (max-height: 400px) {
        width: 90px;
        height: 90px;
        margin: 0 5px;
        & > span {
            font-size: 12px;
        }
        & > svg {
            font-size: 30px;
        }
    }
`;

export default MainFeature;