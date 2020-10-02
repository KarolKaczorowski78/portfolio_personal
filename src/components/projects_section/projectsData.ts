import DrinksHead from '../../img/projects/DrinksMain.jpg';
import eComHead from '../../img/projects/eComDetails.jpg';
import PuzzleHead from '../../img/projects/PuzzleSolve.jpg';
import itHead from '../../img/projects/itCompany.jpg';
import skillSvgs, { learningSkills } from '../skills_section/skillsSvgs';
import * as icon from '@styled-icons/simple-icons/StyledComponents';

const [html, css, js, ts, sass, react, webpack, babel, git, ..._] = skillSvgs.map(arr => arr[0]);
const redux = learningSkills[learningSkills.length - 1][0];
const cSharp = learningSkills[0][0]

const ProjectsData: ProjectData[] = [
    {
        imgUrl: DrinksHead,
        name: 'Drinkery',
        description: 'This app aims for people who are looking for new aromas and flavors. App has been created using free Cocktails Database which contains over 600 drinks, their ingredients, recipies and more.',
        tech: [ts, sass, react],
        links: ['https://github.com/KarolKaczorowski78/drinks_app', 'https://karolkaczorowski78.github.io/drinks_app/'],
    },
    {
        imgUrl: eComHead,
        name: 'Karole',
        description: 'Online clothing shop imitation with simple and intuitive user interface. The entire data about products is stored in a local JSON file. User is able to search, filter and add products of particular size to the cart.',
        tech: [html, css, js, webpack, babel],
        links: ['https://github.com/KarolKaczorowski78/karole', 'https://karolkaczorowski78.github.io/karole/'],
    },
    {
        imgUrl: PuzzleHead,
        name: 'Puzzle App',
        description: 'Application which allows user to pick one of around 30 images (loaded from local JSON file) and solve puzzle with it. Image cutting functionality has been created with canvas API. During solution time user can view the solution, time and moves are measured.',
        tech: [html, sass, ts, webpack, babel],
        links: ['https://github.com/KarolKaczorowski78/puzzle-app', 'https://karolkaczorowski78.github.io/puzzle_app/'],
    },
]

export const projectsInProgress: ProjectData[] = [
    {
        imgUrl: itHead,
        name: 'IT company',
        description: 'Sample IT company website. It will by fully functional website, as soon as I will feel confident with C# I will implement backend (include job offers and possibility to apply on them) in .NET. I am also focused on GIT workflow by working with feature branches.',
        tech: [react, cSharp, redux, git, ts],
        links: ['https://github.com/KarolKaczorowski78/it-company'], 
    }
]

export interface ProjectData {
    imgUrl: string;
    name: string;
    description: string;
    tech: string[];
    links: string[]
}

export default ProjectsData;