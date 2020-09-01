import React, { ReactNode, useEffect } from 'react';
import SectionStyled from './section.styled';
import { useInView } from 'react-intersection-observer';

const Section = (props: SectionProps) => {

    const [ref, inView] = useInView({ threshold: .25 });

    useEffect(() => {
        (inView && props.animation) && props.animation();
    })

    return (
        <SectionStyled ref={ ref } additionalStyle={ props.additionalStyle } className={ props.classNm }>
            { props.children }
        </SectionStyled>
    )
}

interface SectionProps {
    classNm: string;
    children?: ReactNode;
    additionalStyle: string,
    animation?: () => void;
}

export default Section;
