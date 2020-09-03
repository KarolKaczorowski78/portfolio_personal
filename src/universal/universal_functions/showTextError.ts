const showTextError = (el: HTMLTextAreaElement | HTMLInputElement) => {
    el.classList.add('err');
    setTimeout(() => {
        el.classList.remove('err');
    }, 1500);
}

export default showTextError;