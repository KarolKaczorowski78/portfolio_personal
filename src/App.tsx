import React, { useState, createContext, Dispatch, SetStateAction } from 'react';
import About from './components/about_section/aboutSection';
import Home from './components/home_section/homeSection';
import Projects from './components/projects_section/projectsSection';
import Skills from './components/skills_section/skillsSection';
import Contact from './components/contact_section/contactSection';
import Navigation from './components/navigation/navigation';
import ViewNavButton from './components/navigation/view_navigation_button/viewNavigationButton';

export const mainContext = createContext<MainContext | null>(null);

const App = () => {

  const [navVisibility, setNavVisibility] = useState<boolean>(false);

  const providerValue = {
    navVisibility: navVisibility,
    setNavVisibility: setNavVisibility,
  }

  return (
    <>
      <mainContext.Provider value={ providerValue }>
        <ViewNavButton />
        <Navigation />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </mainContext.Provider>
    </>
  );
}

interface MainContext {
  navVisibility: boolean;
  setNavVisibility: Dispatch<SetStateAction<boolean>>;
}

export default App;
