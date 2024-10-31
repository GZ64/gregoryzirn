let el = document.querySelector('.tabs');
let ajout = document.getElementsByClassName('plus');

const howManyCardsIsShowing = () => {
    if (window.matchMedia("(min-width: 992px)").matches) {
        return 3;
    } else {
        return 2
    }
};
const showCards = (element, cards) => {
    let countCardsWillShowing = 0;
    let countCardsShowing = 0;
    let numberCardsPerView = howManyCardsIsShowing();
    cards.forEach(
        function(elem, index, array) {
            let displayCSS = window.getComputedStyle(elem, null).getPropertyValue("display");
            if (displayCSS === 'none' && countCardsWillShowing < numberCardsPerView) {
                countCardsWillShowing++;
                countCardsShowing++;
                elem.style.display = 'list-item';
            } else if (displayCSS === 'list-item') countCardsShowing++;

            if (countCardsShowing === array.length) {
                element.style.display = 'none';
                element.style.opacity = 0;
            }
        }
    );
};

export function certification() {
    M.Tabs.init(el, {});

    let cardsDev = document.querySelectorAll('#dev > ul > li');
    let cardsWeb = document.querySelectorAll('#web > ul > li');
    let cardsSysteme = document.querySelectorAll('#systeme > ul > li');
    let cardsParcours = document.querySelectorAll('#parcours > ul > li');

    let NumberCardsShowing = howManyCardsIsShowing();

    Array.from(ajout).forEach(
        function(element) {
            let btnId = element.id;
            switch(btnId) {
                case "programmeur":
                    if (cardsDev.length <= NumberCardsShowing) element.style.display = 'none';
                    break;
                case "culture-web":
                    if (cardsWeb.length <= NumberCardsShowing) element.style.display = 'none';
                    break;
                case "systemeBtn":
                    if (cardsSysteme.length <= NumberCardsShowing) element.style.display = 'none';
                    break;
                case "cursus":
                    if (cardsParcours.length <= NumberCardsShowing) element.style.display = 'none';
                    break;
                default:
                    console.log('default');
                    break;
            }
            element.addEventListener('click', e => {
                e.preventDefault();

                switch(e.currentTarget.id) {
                    case "programmeur":
                        showCards(element, cardsDev);
                        break;
                    case "culture-web":
                        showCards(element, cardsWeb);
                        break;
                        case "systemeBtn":
                        showCards(element, cardsSysteme);
                        break;
                    case "cursus":
                        showCards(element, cardsParcours);
                        break;
                    default:
                        console.log('default');
                        break;
                }
            });
        }
    );
}