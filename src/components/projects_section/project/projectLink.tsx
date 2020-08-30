import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styled from 'styled-components';

const LinkStyled = styled.a`
    text-decoration: none;
    color: #66FCF1;
    font-size: 30px;
    margin: 0 15px;;
`;

const Projectlink = (props: props) => {
    return (
        <LinkStyled target="_blank" href={ props.url }>
            <FontAwesomeIcon icon={ props.icon } />
        </LinkStyled>
    )
}

type props = {
    icon: IconProp,
    url: string,
}

export default Projectlink
