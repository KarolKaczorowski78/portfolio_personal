import React from 'react';
import NavButton from './navigationButton.styled';
import SectionNames from '../../../universal/constants/sectionNames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import capitalizeString from '../../../universal/universal_functions/capitalizeString';
import scrollToElement from '../../../universal/universal_functions/scrollToElement';

const NavigationButton = (props: NavButtonProps) => {

    const handleClick = () => { scrollToElement(props.value) }

    return (
        <NavButton content={ capitalizeString(props.value) } onClick={ handleClick }>
            <span>
                <FontAwesomeIcon icon={ props.icon } />
            </span>
        </NavButton>
    )
}


interface NavButtonProps {
    value: SectionNames;
    icon: IconProp;
}

export default NavigationButton;
