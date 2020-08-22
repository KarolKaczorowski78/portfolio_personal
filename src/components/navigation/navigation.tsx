import React, { useContext } from 'react';
import NavigationButton from './navigation_button/navigationButton';
import NavigationStyled from './navigation.styled';
import SectionNames from '../../universal/constants/sectionNames';
import navIcons from '../../universal/constants/navIcons';
import { mainContext } from '../../App';

const Navigation = () => {

    const ctx = useContext(mainContext);
    const navButtonsValues = Object.values(SectionNames);

    const renderNavButtons = () => 
        navButtonsValues.map((val, i) => 
            <NavigationButton key={ i } icon={ navIcons[i] } value={ val } />);
    
    return (
        <NavigationStyled visible={ ctx?.navVisibility ? ctx.navVisibility : false }>
            { renderNavButtons() }
        </NavigationStyled>
    )
}

export default Navigation;
