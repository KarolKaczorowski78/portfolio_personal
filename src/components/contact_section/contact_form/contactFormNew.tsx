import React, { FormEvent, useState } from 'react';
import ContactFormStyled from './contactForm.styled';
import sendEmail from '../../../universal/universal_functions/sendEmail';
import isValidEmail from '../../../universal/universal_functions/isValidEmail';
import showTextError from '../../../universal/universal_functions/showTextError';
import SendingEmailInformator from './sending_email_informator/sendingEmailInformator';

const ContactForm = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [sendingResult, setSendingResult] = useState<string | false>(false);
    const propValues: string[] = [name, email, subject, message];

    const handleSubmit = (e: FormEvent) => {
        const form = e.target as HTMLFormElement;
        const isEmail = isValidEmail(email);

        e.preventDefault();

        (!propValues.includes('') && isEmail) ?
            (async () => {
                setSendingResult(await sendEmail(form));

                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            })() : handleSubmitErrors(isEmail, form);
    }
    

    const handleSubmitErrors = (isEmail: boolean, form: HTMLFormElement) => {
        const emptyFields = getEmptyFields();

        !isEmail && emptyFields.push(propValues.indexOf(email));

        colourFields(form, Array.from(new Set(emptyFields)));
    }

    const getEmptyFields = (): number[] => (propValues.map((val, i) => 
            val.length === 0 ? i : -1).filter(e => e !== -1));

    const colourFields = (form: HTMLFormElement, indexes: number[]) => {
        indexes.forEach(index => {
            const el = form.childNodes[index] as HTMLInputElement | HTMLTextAreaElement;
            showTextError(el);
        })
    }

    return (
        <ContactFormStyled onSubmit={ handleSubmit }>
            <input value={ name } onChange={ e => { setName(e.target.value)} } 
                    placeholder="Name" type="text" name="name"/>

            <input value={ email } onChange={ e => { setEmail(e.target.value)} } 
                    placeholder="E-mail adress" type="text" name="email"/>

            <input value={ subject } onChange={ e => { setSubject(e.target.value)} } 
                    placeholder="Topic" type="text" name="subject"/>

            <textarea value={ message } onChange={ e => { setMessage(e.target.value)} } 
                      placeholder="Your message..." 
                      name="message" id="" 
                      rows={ 10 }>
            </textarea>
            <button type="submit">Send</button>
            <SendingEmailInformator sendingResult={ sendingResult } />
        </ContactFormStyled>
    )
}
export default ContactForm;