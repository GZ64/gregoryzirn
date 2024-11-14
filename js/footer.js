export function footer() {
    let elems = document.querySelectorAll('.fixed-action-btn');
    let options = {
        direction: 'left'
    };
    M.FloatingActionButton.init(elems, options);

    let linkedinButton = document.getElementById('linkedin');
    let facebookButton = document.getElementById('facebook');
    let twitterButton = document.getElementById('twitter');
    linkedinButton.addEventListener('click', () => {
        let linkedinLink = document.querySelector('.IN-widget span button');
        linkedinLink.click();
    });
    facebookButton.addEventListener('click', () => {
        window.open(
            "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=http%3A%2F%2Fwww.gregoryzirn.fr%2F&display=popup&ref=plugin&src=share_button",
            "_blank",
            "toolbar=yes,top=500,left=500,width=400,height=400"
        );
    });
    twitterButton.addEventListener('click', () => {
        window.open(
            "https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Flocalhost%2Fgregoryzirn%2Fdist%2F&ref_src=twsrc%5Etfw&text=Gr%C3%A9gory%20Peign%C3%A9&tw_p=tweetbutton&url=http%3A%2F%2Flocalhost%2Fgregoryzirn%2Fdist%2F%23qui_suis_je&via=gregoryzirn.fr",
            "_blank",
            "toolbar=yes,top=500,left=500,width=400,height=400"
        );
    });
}