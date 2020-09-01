import React from 'react';
import { ProjectsSectionStyle } from './projectsSection.styled';
import SectionNames from '../../universal/constants/sectionNames';
import H1 from '../universal/header/h1';
import ProjectsImages from './projectsData';
import Project from './project/project';
import Section from '../section/section';

const ProjectsSection = () => {
    return (
        <Section additionalStyle={ ProjectsSectionStyle } classNm={ SectionNames.PROJECTS }>
            <H1>Projects</H1>
            { Object.values(ProjectsImages).map(({ imgUrl, name, tech, links }) => 
                <Project name={ name } image={ imgUrl } technologies={ tech } links={ links } />) }
        </Section>
    )
}

export default ProjectsSection;
