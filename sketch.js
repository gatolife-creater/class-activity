let x;
let y;
let r;
let xs;
let ys;


function setup() {
    createCanvas(windowWidth, windowHeight);
    x = width / 2;
    y = height / 2;
    r = 25;
    xs = 4;
    ys = 4;
}

function draw() {
    background(0);
    if (x < r || width - r < x) xs *= -1;
    if (y < r || height - r < y) ys *= -1;
    x += xs;
    y += ys;

    fill(255);
    circle(x, y, r * 2);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}