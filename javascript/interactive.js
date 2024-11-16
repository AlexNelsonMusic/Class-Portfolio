let leftGrey = '#babdc4';
let rightGrey = '#808082';
let loGrey = '#cccdd2';
let black = '#100e0f'
let yellow = '#e2ad12';
let white = '#f5f7ec';
let cream = '#e6e0d2';
let red = '#b2270b';

function setup() {
  createCanvas(553, 551);
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    leftGrey = '#2196F3'
    rightGrey = '#DA00FF';
    loGrey = '#002AFF';
    black = '#FF1100'
    yellow = '#1EFF00';
    white = '#FFF000';
    cream = '#00FFF6';
    red = '#FC7501';
  }
  if (keyCode == DOWN_ARROW) {
    leftGrey = '#ACAD2D'
    rightGrey = '#25B48C';
    loGrey = '#7E4330';
    black = '#9E9E9E'
    yellow = '#2B3196';
    white = '#FF007D';
    cream = '#779260';
    red = '#61693B'
  }
  if (keyCode == LEFT_ARROW) {
    leftGrey = '#45423b'
    rightGrey = '#7f7f7d';
    loGrey = '#33322d';
    black = '#eff1f0'
    yellow = '#1d52ed';
    white = '#0a0813';
    cream = '#191f2d';
    red = '#4dd8f4'
  }
  if (keyCode == RIGHT_ARROW) {
    leftGrey = '#BCBCBC';
    rightGrey = '#808080';
    loGrey = '#CDCDCD';
    black = '#0E0E0E'
    yellow = '#ABABAB';
    white = '#F5F5F5';
    cream = '#E0E0E0';
    red = '#4D4D4D';
  }
  if (keyCode == 32) {
    leftGrey = '#babdc4';
    rightGrey = '#808082';
    loGrey = '#cccdd2';
    black = '#100e0f'
    yellow = '#e2ad12';
    white = '#f5f7ec';
    cream = '#e6e0d2';
    red = '#b2270b';
  }
}

function draw() {
// frame
  background('#141414');
  
// background
  fill('#0f0f0f');
  quad(14, 14, 539, 14, 539, 536, 14, 536);
  
// frame lines
  line(14, 14, 0, 0);
  line(539, 14, 553, 0);
  line(539, 536, 553, 551);
  line(14, 536, 0, 551);
  
// fill gap between red, cream, and dark grey
  strokeWeight(0);
  fill(red);
  quad(230, 300, 235, 330, 483, 73, 468, 73);
  
// black "triangle"
  fill(black);
  quad(237, 473, 70, 306, 70, 217, 236, 63);
  fill(black);
  triangle(77, 210, 240, 70, 150, 70);
  
// yellow triangle
  fill(yellow);
  triangle(76, 471, 75, 311, 156, 391,);
  
// white triangle
  fill(white);
  triangle(75, 471, 236, 471, 155, 390);
  
// top left triangle
  fill(leftGrey);
  triangle(77, 75, 216, 74, 76, 213);
  
// bottom grey triangle
  fill(loGrey);
  triangle(236, 471, 398, 471, 236, 309);
  
// top right grey triangle
  fill(rightGrey);
  triangle(475, 74, 282, 74, 378, 166);
  
// cream triangle
  fill(cream);
  quad(236, 309, 378, 166, 282, 74, 235, 74);
  
// red triangle
  fill(red);
  quad(475, 74, 236, 309, 398, 471, 476, 472);
  
// inner frame  
  strokeWeight(1);
  fill('#e5d6c1');
  quad(68, 65, 486, 65, 475, 74, 75, 74);
  quad(68, 65, 66, 480, 75, 471, 76, 75);
  quad(66, 480, 486, 481, 476, 472, 75, 471);
  quad(486, 481, 486, 65, 475, 74, 476, 472);
// this took an insane amount of time, just make a square next time and add lines where the pieces should meet
}