import React from 'react';
import SectionStyled from './section.styled';

const Section = (props: SectionProps) => {
    return (
        <SectionStyled className={ props.classNm } />
    )
}

interface SectionProps {
    classNm: string;
}

export default Section;
