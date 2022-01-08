import { createTabs } from "./create-contents.js";
import { setTextbookLinks } from "./textbook-link.js";
import { whereAmI } from "./where-am-i.js";
import { detectJargon } from "./words.js"

window.addEventListener("load", function() {
    createTabs();
    setTextbookLinks();
    whereAmI();
    setLang();
    detectJargon();
});

window.addEventListener('scroll', function() {});
document.onselectionchange = function() {
    let text = document.getSelection().toString();
    console.log(text);
}

function setLang() {
    let lang = document.getElementsByTagName("html")[0].lang;
    lang = "jp";
    console.log(lang);
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