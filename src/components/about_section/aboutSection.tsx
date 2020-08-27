import React from 'react';
import SectionNames from '../../universal/constants/sectionNames';
import AboutSectionStyled, { Article, Image, ImageContainer } from './aboutSection.styled';
import { H1, P } from '../home_section/homeSection.styled';
import MainFeature from './main_feature/mainFeature';
import mainFeatureIcons from './mainFeatureIcons';
import aboutImage from '../../img/about.jpg';

const AboutSection = () => {
    return (
        <AboutSectionStyled className={ SectionNames.ABOUT }>
            <Article>
                <H1>ABOUT ME</H1>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</P>
                { mainFeatureIcons.map(({icon, name}) => <MainFeature icon={ icon } name={ name } />) }
            </Article>
            <ImageContainer>
                <Image alt="" src={ aboutImage } />
            </ImageContainer>
        </AboutSectionStyled>
    )
}

export default AboutSection;
