import React, { ReactNode } from 'react';
import HomeStyled, { H1, H3, P, Shit, Principle, HomeNavButton } from './homeSection.styled';
import SectionNames from '../../universal/constants/sectionNames';
import scrollToElement from '../../universal/universal_functions/scrollToElement';

const HomeSection = () => {
    return (
        <HomeStyled className={ SectionNames.HOME }>
            { content }
        </HomeStyled>
    )
}

const content: ReactNode = 
    <>
        <Shit backgroundOpacity="1">
            <H1>FRONT-END<br/> DEVELOPER</H1>
            <H3>Karol Kaczorowski</H3>
            <P>Programming <span>is an art</span></P>
        </Shit>
        <Shit backgroundOpacity=".9">
            <Principle>RESPONSIBLE</Principle>
            <Principle>EASY GOING</Principle>
            <Principle>AMBICIOUS</Principle>
            <Principle>CREATIVITE</Principle>
            <Principle>TENACIOUS</Principle>
        </Shit>
        <Shit backgroundOpacity=".8">
            { Object.values(SectionNames).slice(1).map(name => 
                <HomeNavButton onClick={ () => { scrollToElement(name) }}>
                    { name.toUpperCase() }
                </HomeNavButton>) }
        </Shit>
    </>;

export default HomeSection;
