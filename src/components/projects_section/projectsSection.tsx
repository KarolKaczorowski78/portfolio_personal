import React from 'react';
import SectionStyled from './projectsSection.styled';
import SectionNames from '../../universal/constants/sectionNames';
import { H1 } from '../home_section/homeSection.styled';
import ProjectsImages from './projectsImages';
import Project from './project/project';

const ProjectsSection = () => {
    return (
        <SectionStyled className={ SectionNames.PROJECTS }>
            <H1>Projects</H1>
            { Object.values(ProjectsImages).map(({ imgUrl, name, tech, links }) => 
                <Project name={ name } image={ imgUrl } technologies={ tech } links={ links } />) }
        </SectionStyled>
    )
}

export default ProjectsSection;
