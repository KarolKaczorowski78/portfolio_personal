import React, { FormEvent } from 'react';
import ContactFormStyled from './contactForm.styled';

const ContactFormUI = (props: { handleSubmit: (e: FormEvent) => void }) => {
    return (
        <ContactFormStyled onSubmit={ props.handleSubmit }>
            <input placeholder="Name" type="text" name="name"/>
            <input placeholder="E-mail adress" type="text" name="email"/>
            <input placeholder="Topic" type="text" name="subject"/>
            <textarea placeholder="Your message..." 
                      name="message" id="" 
                      rows={ 10 }>
            </textarea>
            <button type="submit">Send</button>
        </ContactFormStyled>
    )
}
export default ContactFormUI;