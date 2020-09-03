import React, { FormEvent } from 'react';
import emailjs from 'emailjs-com';
import showTextError from '../../../universal/universal_functions/showTextError';
import isValidEmail from '../../../universal/universal_functions/isValidEmail';
import ContactFormUI from './contactFormUI';

const ContactForm = () => {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const emailField = form.childNodes[1] as HTMLInputElement;
        const emptyFields = getEmptyFields(form);
        const isEmail = isValidEmail(emailField.value);

        (emptyFields.length === 0 && isEmail) ? sendEmail(e) : 
                    markEmptyFields(isEmail ? emptyFields : [...emptyFields, emailField]);
    }
    
    const getEmptyFields = (form: HTMLFormElement): ChildNode[] => 
        Array.from(form.childNodes).slice(0, form.childNodes.length -1).filter((el: ChildNode) => {
            const e = el as HTMLInputElement | HTMLTextAreaElement;
            return e.value.length === 0;
        });

    const sendEmail = (e: FormEvent) => {
        const form = e.target as HTMLFormElement;
        emailjs.sendForm('gmail', 'template_tua14sj', form, 'user_968wDcgPKo0Pn55BwZxDz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    const markEmptyFields = (fields: ChildNode[]) => {
        fields.forEach(field => {
            const f = field as HTMLTextAreaElement | HTMLInputElement;
            showTextError(f);
        });
    }

    return (
        <ContactFormUI handleSubmit={ handleSubmit } />
    )
}
export default ContactForm