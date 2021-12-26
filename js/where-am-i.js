let url;
let nav;

window.addEventListener("load", function() {
    createTabs();
    setTextbookLinks();
    url = location.href;
    nav = document.getElementsByClassName("nav-link");
    for (let i = 0; i < nav.length; i++) {
        if (url == nav[i].href) {
            nav[i].setAttribute("class", "nav-link active");
        }
    }

});

// });