import React from 'react';
import HomeSectionStyle, { H1, H3, P, SectionPiece, Principle, HomeNavButton } from './homeSection.styled';
import SectionNames from '../../universal/constants/sectionNames'
import homeAnimation from '../../sections_animations/home';
import scrollToElement from '../../universal/universal_functions/scrollToElement';
import Section from '../section/section';
import Writer from './writer/writer';

const HomeSection = () => {
    return (
        <Section additionalStyle={ HomeSectionStyle } classNm={ SectionNames.HOME } animation={ homeAnimation }>
            <SectionPiece backgroundOpacity="1">
                <H1>FRONT-END<br/> DEVELOPER</H1>
                <H3>Karol Kaczorowski</H3>
                <P>Programming <span>is an art</span></P>
                <Writer />
            </SectionPiece>
            <SectionPiece backgroundOpacity=".9">
                <Principle>RESPONSIBLE</Principle>
                <Principle>EASY GOING</Principle>
                <Principle>AMBICIOUS</Principle>
                <Principle>CREATIVITE</Principle>
                <Principle>TENACIOUS</Principle>
            </SectionPiece>
            <SectionPiece backgroundOpacity=".8">
                { Object.values(SectionNames).slice(1).map(name => 
                    <HomeNavButton onClick={ () => { scrollToElement(name) }}>
                        { name.toUpperCase() }
                    </HomeNavButton>) }
            </SectionPiece>
        </Section>
    )
}

export default HomeSection;
