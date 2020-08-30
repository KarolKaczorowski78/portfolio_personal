import DrinksHead from '../../img/projects/DrinksMain.jpg';
import eComHead from '../../img/projects/eComDetails.jpg';
import PuzzleHead from '../../img/projects/PuzzleSolve.jpg';
import skillSvgs from '../skills_section/skillsSvgs';

const [html, css, js, ts, sass, react, rwd, webpack, babel] = skillSvgs.map(arr => arr[0]);

const ProjectsData = {
    drinkify: {
        imgUrl: DrinksHead,
        name: 'Drinkify',
        description: 'Description',
        tech: [ts, sass, react, rwd],
        links: ['https://github.com/KarolKaczorowski78/portfolio_personal', 'https://karolkaczorowski78.github.io/eCommerce/dist/'],
    },
    eCommerce: {
        imgUrl: eComHead,
        name: 'Karole',
        description: 'Description',
        tech: [html, css, js, webpack, babel],
        links: ['https://github.com/KarolKaczorowski78/eCommerce', 'https://karolkaczorowski78.github.io/eCommerce/dist/'],
    },
    puzzle: {
        imgUrl: PuzzleHead,
        name: 'Puzzle app',
        description: 'Description',
        tech: [html, sass, ts, webpack, babel],
        links: ['https://github.com/KarolKaczorowski78/puzzle-app', 'https://karolkaczorowski78.github.io/puzzle-app/dist/'],
    }
}

export default ProjectsData;