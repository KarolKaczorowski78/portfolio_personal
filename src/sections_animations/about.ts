import gsap from 'gsap';

const aboutAnimation = () => {
    const aboutSection = document.querySelector('.about');
    const article = aboutSection?.querySelector('article');
    const imgC = aboutSection?.querySelector('img');
    const tl = gsap.timeline();
    gsap.defaults({ duration: .5, stagger: .25 });

    (article && imgC) && (() => {
        tl.to(Array.from(article.childNodes), { y: 0, autoAlpha: 1 })
        .to(imgC.parentElement, { autoAlpha: 1 })    
        .to(imgC, { autoAlpha: 1, x: 0 });
    })();
}

export default aboutAnimation;