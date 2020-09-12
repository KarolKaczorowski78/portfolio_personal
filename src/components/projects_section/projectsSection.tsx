import React from 'react';
import { ProjectsSectionStyle } from './projectsSection.styled';
import SectionNames from '../../universal/constants/sectionNames';
import H1 from '../universal/headling/h1';
import ProjectsImages from './projectsData';
import Project from './project/project';
import Section from '../section/section';

const ProjectsSection = () => {
    return (
        <Section additionalStyle={ ProjectsSectionStyle } classNm={ SectionNames.PROJECTS }>
            <H1>Projects</H1>
            { Object.values(ProjectsImages).map(({ imgUrl, name, description, tech, links }, i) => 
                <Project name={ name } image={ imgUrl } technologies={ tech } 
                    key={ i } links={ links } description={ description } />) }
        </Section>
    )
}

export default ProjectsSection;
