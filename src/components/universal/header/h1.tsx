import React, { useEffect } from 'react';
import H1Styled from './h1.styled';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

const H1 = (props: { children: string }) => {

    const [ref, inView, entry] = useInView({ threshold: 1 });

    useEffect(() => {
        (inView && entry) && gsap.to(entry.target, { y: 0, duration: .4, autoAlpha: 1 });
    })

    return (
        <H1Styled ref={ ref }>
            { props.children }
        </H1Styled>
    )
}

export default H1;
