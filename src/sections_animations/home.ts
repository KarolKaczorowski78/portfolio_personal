import gsap from 'gsap';

const homeAnimation = () => {
    const homeSection = document.querySelector('.home');
    const childDivs = homeSection?.getElementsByTagName('div');

    gsap.defaults({ stagger: .2, duration: .35, ease: 'Power4' });

    childDivs && (() => { 
        const children = Array.from(childDivs).map(({ childNodes }) => childNodes);
        gsap.to(children, { x: 0, y: 0, autoAlpha: 1 });
    })()
}

export default homeAnimation;