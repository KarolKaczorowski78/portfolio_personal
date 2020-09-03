import SectionNames from '../../universal/constants/sectionNames';

const scrollToElement = (elementName: SectionNames): void => {
    const el: HTMLDivElement | null = document.querySelector(`.${elementName}`);
    el && (() => {
        window.scrollTo({
            top: el.offsetTop,
            behavior: 'smooth',
        })
    })()
}

export default scrollToElement;