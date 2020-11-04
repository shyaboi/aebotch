var x;
var y;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  x = random(windowWidth - 20);
  y = random(windowHeight - 20);
  background(51);
  frameRate(random(60));
}

var r = 0,
  g = 0,
  b = 0;
var bigRan = Math.floor(Math.random(1) * 3);
// var ranR = Math.floor(Math.random(1)*255)
// var ranG = Math.floor(Math.random(1)*255)
// var ranB = Math.floor(Math.random(1)*255)
switch (bigRan) {
  case 0:
    r = 255;
    break;
  case 1:
    g = 255;
    break;
  case 2:
    b = 255;
    break;
}
// g=ranG;
// b=ranB;
const rgb = () => {
  console.log(r, g, b);
  if (r > 0 && b == 0) {
    r--;
    g++;
  }
  if (g > 0 && r == 0) {
    g--;
    b++;
  }
  if (b > 0 && g == 0) {
    r++;
    b--;
  }
};
setInterval(() => {
  rgb();
}, 2000);
const ok = () => {
  strokeWeight(random(11));
  stroke(r, g, b, random(255));
  point(x, y);

  var ran = floor(random(8));
  switch (ran) {
    case 0:
      x = x + random(20);
      break;
    case 1:
      x = x - random(20);
      break;
    case 2:
      y = y + random(20);
      break;
    case 3:
      y = y - random(20);
      break;
    case 4:
      y = y - random(20);
      x = x - random(20);
      break;
    case 5:
      y = y + random(20);
      x = x + random(20);
      break;
    case 6:
      y = y - random(20);
      x = x + random(20);
      break;
    case 7:
      y = y + random(20);
      x = x - random(20);
      break;
  }
};

function draw() {
  ok();
  frameRate(60)//random(1,60));

  if (y < 0) {
    y = height;
  }

  if (y > windowHeight - 20) {
    y = 10;
  }

  if (x < 0) {
    x = width;
  }
  if (x > windowWidth - 20) {
    x = 10;
  }
}
