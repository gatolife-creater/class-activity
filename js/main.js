import { createTabs } from "./create-textbook-tabs.js";
import { setTextbookLinks } from "./textbook-link.js";
import { whereAmI } from "./where-am-i.js";
import { createPageTop, displayPageTop } from "./page_top.js"

window.addEventListener("load", function() {
    setLang();
    createTabs();
    setTextbookLinks();
    whereAmI();
    createPageTop();
});

window.addEventListener('scroll', function() {
    let distance = window.scrollY;
    displayPageTop(distance);
});

function setLang() {
    let lang = document.getElementsByTagName("html")[0].lang;
    lang = "jp";
    console.log(lang);
}