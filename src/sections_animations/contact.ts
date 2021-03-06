import gsap from 'gsap';

const contactAnimation = () => {
    const contactSection = document.querySelector('.contact');
    const formChildren = contactSection?.getElementsByTagName('form')[0].childNodes;

    formChildren && (() => {
        gsap.to(Array.from(formChildren).slice(0, formChildren.length - 1), 
                { y: 0, autoAlpha: 1, duration: .4, stagger: .2 });
    })()
}

export default contactAnimation;