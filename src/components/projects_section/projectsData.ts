import DrinksHead from '../../img/projects/DrinksMain.jpg';
import eComHead from '../../img/projects/eComDetails.jpg';
import PuzzleHead from '../../img/projects/PuzzleSolve.jpg';
import skillSvgs from '../skills_section/skillsSvgs';

const [html, css, js, ts, sass, react, rwd, webpack, babel] = skillSvgs.map(arr => arr[0]);

const ProjectsData = {
    drinkify: {
        imgUrl: DrinksHead,
        name: 'Drinkery',
        description: 'This app aims for people who are looking for new aromas and flavors. App has been created using free Cocktails DB which contains over 600 drinks, their ingredients, recipies and more.',
        tech: [ts, sass, react, rwd],
        links: ['https://github.com/KarolKaczorowski78/drinks_app', 'https://karolkaczorowski78.github.io/drinks_app/'],
    },
    eCommerce: {
        imgUrl: eComHead,
        name: 'Karole',
        description: 'Online clothing shop imitation with simple and intuitive user interface. The entire data about products is stored in a local JSON file. User is able to search, filter and add products of particular size to the cart.',
        tech: [html, css, js, webpack, babel],
        links: ['https://github.com/KarolKaczorowski78/karole', 'https://karolkaczorowski78.github.io/karole/'],
    },
    puzzle: {
        imgUrl: PuzzleHead,
        name: 'Puzzle App',
        description: 'Application which allows user to pick one of around 30 images (loaded from local JSON file) and solve puzzle with it. Image cutting functionality has been created with canvas API. During solution time user can view the solution, time and moves are measured.',
        tech: [html, sass, ts, webpack, babel],
        links: ['https://github.com/KarolKaczorowski78/puzzle-app', 'https://karolkaczorowski78.github.io/puzzle_app/'],
    }
}

export default ProjectsData;