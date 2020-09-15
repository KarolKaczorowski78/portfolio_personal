import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import capitalizeString from '../universal/universal_functions/capitalizeString';

gsap.registerPlugin(TextPlugin);

const homeAnimation = () => {
    const homeSection = document.querySelector('.home');
    const childDivs = homeSection?.getElementsByTagName('div');

    const writer = document.querySelector('.writer-content');
    const writerWords = ['consistency', 'curiosity', 'passion', 'patience'];

    const writerTl = gsap.timeline({ repeat: -1 }).pause();

    writerWords.forEach(word => {
        const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: .6 });
        tl.to(writer, { duration: 1, text: capitalizeString(word), delay: .3 });
        writerTl.add(tl);
    })

    childDivs && (() => { 
        const children = Array.from(childDivs).map(({ childNodes }) => childNodes);
        gsap.to(children, { x: 0, y: 0, stagger: .2, duration: .35, autoAlpha: 1, onComplete: () => writerTl.play() });
    })()
}

export default homeAnimation;