import Glide, { Controls, Autoplay, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

export function portfolio() {
    let glide = new Glide('#glide', {
        type: 'carousel',
        autoplay: 4000,
        hoverpause: true,
        startAt: 0,
        breakpoints: {
            450: { perView : 1},
            992: { perView: 2 },
            1200: { perView: 3 },
            3000: { perView: 3 }
        },
        gap: 20
    });

    glide.mount({Controls, Autoplay, Breakpoints});

    /* Click More on the cards */

    document.querySelectorAll('.card-content i').forEach(function(elem, index, array) {
       elem.addEventListener('click', function() {
           console.log('onClick');
           var event = new MouseEvent('click', {
               'view': window,
               'bubbles': true,
               'cancelable': true
           });
           elem.parentElement.childNodes[1].dispatchEvent(event);
       });
    });
}