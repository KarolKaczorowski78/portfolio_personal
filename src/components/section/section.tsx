import React, { ReactNode } from 'react';
import SectionStyled from './section.styled';

const Section = (props: SectionProps) => {
    return (
        <SectionStyled className={ props.classNm }>
            {/* <SectionTextContentStyled>{ props.children }</SectionTextContentStyled>
            <img src={ HomeImage } alt=""/> */}
        </SectionStyled>
    )
}

interface SectionProps {
    classNm: string;
    children?: ReactNode;
}

export default Section;
