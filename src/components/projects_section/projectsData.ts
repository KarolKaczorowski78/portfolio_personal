import DrinksHead from '../../img/projects/DrinksMain.jpg';
import eComHead from '../../img/projects/eComDetails.jpg';
import PuzzleHead from '../../img/projects/PuzzleSolve.jpg';
import skillSvgs from '../skills_section/skillsSvgs';

const [html, css, js, ts, sass, react, rwd, webpack, babel] = skillSvgs.map(arr => arr[0]);

const ProjectsData = {
    drinkify: {
        imgUrl: DrinksHead,
        name: 'Drinkery',
        description: 'Description',
        tech: [ts, sass, react, rwd],
        links: ['https://github.com/KarolKaczorowski78/drinks_app', 'https://karolkaczorowski78.github.io/drinks_app/'],
    },
    eCommerce: {
        imgUrl: eComHead,
        name: 'Karole',
        description: 'Description',
        tech: [html, css, js, webpack, babel],
        links: ['https://github.com/KarolKaczorowski78/karole', 'https://karolkaczorowski78.github.io/karole/'],
    },
    puzzle: {
        imgUrl: PuzzleHead,
        name: 'Puzzle app',
        description: 'Description',
        tech: [html, sass, ts, webpack, babel],
        links: ['https://github.com/KarolKaczorowski78/puzzle-app', 'https://karolkaczorowski78.github.io/puzzle_app/'],
    }
}

export default ProjectsData;