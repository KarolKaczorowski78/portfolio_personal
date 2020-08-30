import React from 'react';
import ProjectStyled, { ProjectDetails } from './project.styled';
import ProjectLink from './projectLink';
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons';

const Project = (props: props) => {
    return (
        <ProjectStyled>
            <img src={ props.image } alt=""/>
            <ProjectDetails>
                <h1>{ props.name }</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                { props.technologies.slice(0, 5).map(url => <img src={ url } alt="" />) }
                <br/>
                <ProjectLink icon={ faCode } url={ props.links[0] } />
                <ProjectLink icon={ faEye } url={ props.links[1] } />
            </ProjectDetails>
        </ProjectStyled>
    )
}

type props = {
    image: string,
    name: string,
    links: string[],
    technologies: string[],
}

export default Project;