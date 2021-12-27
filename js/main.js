import { createTabs } from "./create-textbook-tabs.js";
import { setTextbookLinks } from "./textbook-link.js";
import { whereAmI } from "./where-am-i.js";

window.addEventListener("load", function() {
    createTabs();
    console.log(1);
    setTextbookLinks();
    console.log(2);
    whereAmI();
    console.log(3);
});