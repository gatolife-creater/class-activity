import { createTabs } from "./create-contents.js";
import { setTextbookLinks } from "./textbook-link.js";
import { whereAmI } from "./where-am-i.js";
import { detectJargon } from "./words.js"
import { LoadProc } from "./date.js";

window.addEventListener("load", function() {
    createTabs();
    setTextbookLinks();
    whereAmI();
    setLang();
    detectJargon();
    changePath();
});

window.addEventListener('scroll', function() {});

setInterval(LoadProc, 1000);

function setLang() {
    let lang = document.getElementsByTagName("html")[0].lang;
    lang = "jp";
    console.log(lang);
}

function changePath() {
    if (window.location.href.includes("htt")) {
        let scripts = document.getElementsByTagName("script");
        for (let i = 0; i < scripts.length; i++) {
            if (scripts[i].src.includes("sketch.js")) {
                console.log(scripts[i].src);
                scripts[i].src = scripts[i].src.replace("/js/sketch.js", "/class-activity/sketch.js");
                console.log(scripts[i].src);
            }
        }
    }
}

let ku = ` ■■    ■                                                       
 ■■    ■       ■  ■  ■    ■■■  ■   ■    ■■■■■■■■■■             
■■■■ ■■■■■■    ■  ■  ■■   ■ ■  ■   ■    ■■■■■■■■■■             
   ■ ■ ■  ■   ■   ■■      ■ ■ ■■■■■■■   ■     ■■■      ■■      
  ■  ■ ■  ■   ■ ■■■■■■■■  ■■  ■■   ■    ■ ■ ■■        ■■ ■     
 ■■  ■■■■■■  ■■    ■      ■ ■■■■■  ■    ■ ■■■■■■■    ■■   ■    
 ■■■ ■ ■  ■  ■■    ■      ■ ■ ■■ ■ ■    ■ ■  ■  ■   ■■     ■■  
■■■■■■ ■  ■   ■    ■      ■ ■ ■■ ■ ■    ■ ■■■■■■■   ■       ■■ 
  ■  ■■■■■■   ■    ■■     ■■■ ■■   ■   ■ ■■■■■■■■■            ■
  ■  ■ ■  ■   ■     ■  ■  ■   ■■   ■   ■ ■   ■ ■ ■             
  ■    ■      ■      ■ ■  ■   ■■ ■■■   ■ ■ ■■■■■ ■             
  ■    ■      ■       ■   ■            ■ ■     ■■■             
                                                               
                                                               
                                                               
                                                               
     ■           ■■■                       ■■■■                
     ■             ■        ■■■■■■■      ■■  ■■                
     ■ ■■                       ■           ■■                 
     ■■        ■■■■■■          ■           ■■                  
     ■         ■    ■■                   ■■■■■■■■              
     ■               ■                  ■   ■                  
     ■               ■      ■              ■                   
 ■■■■■■             ■■     ■               ■                   
 ■   ■ ■■          ■■       ■              ■                   
 ■■■■            ■■■         ■■■■■■■        ■■■■               
                                              ■                `;

console.log(ku);