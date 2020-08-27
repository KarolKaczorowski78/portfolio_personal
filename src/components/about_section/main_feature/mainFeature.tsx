import React from 'react';
import MainFeatureStyled from './mainFeature.styled';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Mainfeature = (props: { icon: IconProp, name: string }) => {
    return (
        <MainFeatureStyled>
            <FontAwesomeIcon icon={ props.icon } />
            <span>{ props.name }</span>
        </MainFeatureStyled>
    )
}

export default Mainfeature
