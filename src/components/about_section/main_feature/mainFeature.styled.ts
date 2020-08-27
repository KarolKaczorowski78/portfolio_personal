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
    margin-right: 20px;
    text-align: center;
    color: #66FCF1;
    & > svg {
        font-size: 40px;
    }
`;

export default MainFeature;