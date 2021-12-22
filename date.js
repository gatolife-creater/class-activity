function LoadProc() {
    var now = new Date();
    var target = document.getElementById("DateTimeDisp");

    // var Year = now.getFullYear();
    // var Month = now.getMonth() + 1;
    // var Date = now.getDate();
    var Hour = now.getHours();
    var Min = now.getMinutes();
    var Sec = now.getSeconds();

    target.innerHTML = Hour + "時" + Min + "分";
}

setInterval(LoadProc, 1000);