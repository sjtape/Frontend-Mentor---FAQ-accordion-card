

const mediaQuery = window.matchMedia('(min-width: 1024px)');

const changeMedia = e => {
    const woman = document.querySelector('.woman');
    const shadow = document.querySelector('.shadow');
    if (e.matches) {
        woman.src = './images/illustration-woman-online-desktop.svg';
        shadow.src = './images/bg-pattern-desktop.svg';
    } else {
        woman.src = './images/illustration-woman-online-mobile.svg';
        shadow.src = './images/bg-pattern-mobile.svg';
    }
}


changeMedia(mediaQuery);
mediaQuery.addListener(changeMedia);
