import { VIEW_HEIGHT_HOME } from './constants';

export function home() {
    let homeSection = document.getElementById('home');
    let buttonNext = document.querySelector('.suite');
    let buttonBackToHome = document.getElementById('back-to-home');

    homeSection.style.minHeight = VIEW_HEIGHT_HOME;
    buttonNext.style.transform = "inherit";
    buttonNext.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#greg-mobile a[href="#qui_suis_je"]').click();
    });

    buttonBackToHome.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#greg-mobile a[href="#home"]').click();
    });
}