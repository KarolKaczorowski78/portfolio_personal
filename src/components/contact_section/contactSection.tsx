import React from 'react';
import ContactSectionStyled from './contactSection.styled';
import SectionNames from '../../universal/constants/sectionNames';
import ContactForm from './contact_form/contactForm';
import socialMediaData from './socialMediaLinkData';
import ProjectLink from '../projects_section/project/projectLink';
import { H1 } from '../home_section/homeSection.styled';

const ContactSection = () => {
    return (
        <ContactSectionStyled className={ SectionNames.CONTACT }>
            <H1>CONTACT</H1>
            <ContactForm />
            { Object.values(socialMediaData).map(({ icon, link }) => <ProjectLink icon={ icon } url={ link } />) }
        </ContactSectionStyled>
    )
}

export default ContactSection
