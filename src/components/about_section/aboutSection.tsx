import React from 'react';
import SectionNames from '../../universal/constants/sectionNames';
import AboutSectionStyle, { Article, Image, ImageContainer } from './aboutSection.styled';
import { P } from '../home_section/homeSection.styled';
import H1 from '../universal/headling/h1';
import MainFeature from './main_feature/mainFeature';
import mainFeatureIcons from './mainFeatureIcons';
import aboutImage from '../../img/about.jpg';
import Section from '../section/section';
import aboutAnimation from '../../sections_animations/about';

const AboutSection = () => {
    return (
        <Section classNm={ SectionNames.ABOUT } additionalStyle={ AboutSectionStyle } animation={ aboutAnimation }>
            <Article>
                <H1>ABOUT ME</H1>
                    <P>I'm a young man who is constantly looking for new challenges and opportunities for self development, I really enjoy investing free time in myself and I perform very well in tasks which I know will benefit me in the future. I'm passioned about modern technology, it's fascinating how fast and efficiently computer programs are able to finish given tasks. <span>I bind my future with programming and as time goes on I see myself as a full stack web developer.</span></P>
                    { mainFeatureIcons.map(({icon, name}, i) => 
                    <MainFeature icon={ icon } name={ name } key={ i } />) }
            </Article>
            <ImageContainer>
                <Image alt="" src={ aboutImage } />
            </ImageContainer>
        </Section>
    )
}

export default AboutSection;
