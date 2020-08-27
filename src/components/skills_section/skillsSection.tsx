import React from 'react';
import SkillsSectionStyled, { SkillsChartContainer } from './skillsSection.styled';
import SectionNames from '../../universal/constants/sectionNames';
import Skill from './skill/skill';
import svgs from './skillsSvgs';
import { H1 } from '../home_section/homeSection.styled';

const SkillsSection = () => {

    return (
        <SkillsSectionStyled className={ SectionNames.SKILLS }>
            <H1>SKILLS</H1>
                <SkillsChartContainer>
                    { svgs.map(([svg, description]) => 
                    <Skill svg={ svg } description={ description } />) }
                </SkillsChartContainer>
        </SkillsSectionStyled>
    )
}

export default SkillsSection;
