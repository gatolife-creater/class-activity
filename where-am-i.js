let url;
let nav;

window.onload = function() {
    url = location.href;
    nav = document.getElementsByClassName("nav-link");
    for (i in nav) {
        if (url == nav[i].href) {
            nav[i].setAttribute("class", "nav-link active");
        }
    }
}

// });