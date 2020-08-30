import styled from 'styled-components';

const ContactForm = styled.form`
    width: 500px;
    height: auto;
    margin: 20px auto;
    box-sizing: border-box;
    position: relative;
    & > * {
        box-sizing: border-box;
        color: white;
        padding: 12px;
        border: none;
        box-shadow: 0 0 10px #66FCF1;
        background: none;
        margin-top: 15px;
        display: inline-block;  
        width: 100%;
        &:focus {
            box-shadow: 0 0 11px gold;
            box-shadow: 0 0 11px white;
        }
    }
    & > input {
        height: 45px;
    }
    & > button {
        width: 115px;
        height: auto;
        padding: 10px 12px;
        border-radius: 25%;
        background: none;
        background: rgb(11, 25, 45);
    }
    @media (max-width: 510px) {
        width: 90vw;
    }
`;

export default ContactForm;