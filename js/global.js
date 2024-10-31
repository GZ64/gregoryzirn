export function global() {
    let elemsScrollspy = document.querySelectorAll('.scrollspy');
    let optionsScrollspy = {
        scrollOffset: 60
    };
    M.ScrollSpy.init(elemsScrollspy, optionsScrollspy);

    let elemsParallax = document.querySelectorAll('.parallax');
    M.Parallax.init(elemsParallax, {});
}