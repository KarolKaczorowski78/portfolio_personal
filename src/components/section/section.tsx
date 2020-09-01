import React, { ReactNode, useEffect, useState } from 'react';
import SectionStyled from './section.styled';
import { useInView } from 'react-intersection-observer';

const Section = (props: SectionProps) => {

    const [ref, inView] = useInView({ threshold: .25 });
    const [wasShown, setWasShown] = useState<boolean>(false);

    useEffect(() => {
        (inView && props.animation && !wasShown) && (() => {
            setWasShown(true);
            props.animation();
        })()
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
