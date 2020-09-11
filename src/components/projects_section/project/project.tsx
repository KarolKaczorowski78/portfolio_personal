import React, { useEffect } from 'react';
import ProjectStyled, { ProjectDetails } from './project.styled';
import ProjectLink from './projectLink';
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const Project = (props: props) => {

    const [ref, inView, entry] = useInView({ threshold: .6 });

    useEffect(() => {
        (inView && entry) && (() => {
            gsap.to(entry.target, { y: 0, autoAlpha: 1, duration: .4 });
        })();
    })

    return (
        <ProjectStyled ref={ ref }>
            <img src={ props.image } alt=""/>
            <ProjectDetails>
                <h1>{ props.name }</h1>
                    <p>{ props.description }</p>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                <span>
                    { props.technologies.slice(0, 5).map((url, i) => 
                    <img key={ i } src={ url } alt="" />) }
                </span>  
                <br/>
                <span>
                    <ProjectLink icon={ faCode } url={ props.links[0] } />
                    <ProjectLink icon={ faEye } url={ props.links[1] } />
                </span>
            </ProjectDetails>
        </ProjectStyled>
    )
}

type props = {
    image: string,
    name: string,
    description: string,
    links: string[],
    technologies: string[],
}

export default Project;