import React from 'react';
import ContactSectionStyle from './contactSection.styled';
import SectionNames from '../../universal/constants/sectionNames';
import ContactForm from './contact_form/contactFormNew';
import socialMediaData from './socialMediaLinkData';
import ProjectLink from '../projects_section/project/projectLink';
import H1 from '../universal/header/h1';
import Section from '../section/section';
import contactAnimation from '../../sections_animations/contact';

const ContactSection = () => {
    return (
        <Section additionalStyle={ ContactSectionStyle } classNm={ SectionNames.CONTACT } animation={ contactAnimation }>
            <H1>CONTACT</H1>
            <ContactForm />
            { Object.values(socialMediaData).map(({ icon, link }) => <ProjectLink icon={ icon } url={ link } />) }
        </Section>
    )
}

export default ContactSection
