import React, { FormEvent } from 'react';
import ContactFormStyled from './contactForm.styled';

const ContactForm = () => {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <ContactFormStyled method="POST" onSubmit={ handleSubmit }>
            <input placeholder="E-mail adress" type="text" name="email"/>
            <input placeholder="Topic" type="text" name="topic"/>
            <textarea placeholder="Your message..." 
                      name="content" id="" 
                      rows={ 10 }>
            </textarea>
            <button>Send</button>
        </ContactFormStyled>
    )
}
export default ContactForm
