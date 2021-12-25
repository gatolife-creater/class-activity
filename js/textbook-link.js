let langs = "beginner,javascript,python,cs,html,css".split(",");

function setTextbookLinks() {
    if (window.location.href.includes("textbook.html")) {
        for (let i = 0; i < langs.length; i++) {
            let txtlinks = document
                .getElementsByClassName(langs[i])[0]
                .children[1]
                .children;
            for (let chapter = 0; chapter < txtlinks.length; chapter++) {
                // console.log(txtlinks[chapter], +chapter + 1);
                // console.log("text", txtlinks[chapter]);
                let temp = chapter + 1;
                txtlinks[chapter].href = `textbooks/${langs[i]}/${temp}.html`;
            }
        }
    }

    for (let i = 0; i < langs.length; i++) {
        if (window.location.href.includes(langs[i] + "/")) {
            let tablinks = document.getElementsByClassName("auto-generated-href");
            for (let tablink = 0; tablink < tablinks.length; tablink++) {
                let temp = tablink + 1;
                tablinks[tablink].href = `${temp}.html`;
            }
        }

    }

}