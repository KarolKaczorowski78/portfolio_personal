import React from 'react';
import ContactFormStyled from './contactForm.styled';

const ContactForm = () => {
    return (
        <ContactFormStyled>
            <input placeholder="E-mail adress" type="text"/>
            <input placeholder="Topic" type="text"/>
            <textarea placeholder="Your message..." name="" id="" rows={ 10 }></textarea>
            <button>Send</button>
        </ContactFormStyled>
    )
}
export default ContactForm
