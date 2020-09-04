import React from 'react';
import { SkillsChartContainer, SkillSectionStyle } from './skillsSection.styled';
import SectionNames from '../../universal/constants/sectionNames';
import Section from '../section/section';
import Skill from './skill/skill';
import svgs from './skillsSvgs';
import H1 from '../universal/header/h1';

const SkillsSection = () => {

    return (
        <Section additionalStyle={ SkillSectionStyle } classNm={ SectionNames.SKILLS }>
            <H1>SKILLS</H1>
                <SkillsChartContainer>
                    { svgs.map(([svg, description], i) => 
                    <Skill svg={ svg } description={ description } key={ i } />) }
                </SkillsChartContainer>
        </Section>
    )
}

export default SkillsSection;
