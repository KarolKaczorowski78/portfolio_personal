import React, { useContext } from 'react';
import ViewNavButton from './viewNavigationButton.styled';
import { mainContext } from '../../../App';

const ViewNavigationButton = () => {

    const ctx = useContext(mainContext);

    const handleClick = () => { 
        ctx && (() => {
            const { setNavVisibility } = ctx;
            setNavVisibility(state => !state);
        })();
     }

    return (
        <ViewNavButton onClick={ handleClick } navVisibility={ ctx ? ctx.navVisibility : false }>
            <span></span>
        </ViewNavButton>
    )
}

export default ViewNavigationButton;
