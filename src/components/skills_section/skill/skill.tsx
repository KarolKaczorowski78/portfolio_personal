import React, { useState, useEffect } from 'react';
import SkillStyled, { SkillNameContainer } from './skill.styled';
import { useInView } from 'react-intersection-observer';
import { usePalette } from 'react-palette';

const Skill = (props: { svg: string, description: string }) => {

    const [ref, inView] = useInView({ threshold: 1 });
    const [wasShown, setWasShown] = useState<boolean>(false);
    const { data } = usePalette(props.svg);

    useEffect(() => {
        (inView && !wasShown) && setWasShown(true);
    }, [inView, wasShown]);

    return (
        <SkillStyled ref={ ref } theme={ data.vibrant } wasShown={ wasShown }>
            <img src={ props.svg } alt="" style={{ opacity: wasShown ? 1 : 0 }} />        
            <SkillNameContainer>
                { props.description }
            </SkillNameContainer>
        </SkillStyled>
    )
}

export default Skill
