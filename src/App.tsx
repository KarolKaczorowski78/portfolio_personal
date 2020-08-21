import React from 'react';
import About from './components/about_section/aboutSection';
import Home from './components/home_section/homeSection';
import Projects from './components/projects_section/projectsSection';
import Skills from './components/skills_section/skillsSection';
import Navigation from './components/navigation/navigation';
import ViewNavButton from './components/navigation/view_navigation_button/viewNavigationButton';

const App = () => {
  return (
    <>
      <ViewNavButton />
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
