function setup() {
  createCanvas(553, 551);
}

// function preload() {
// painting = loadImage("Vandoesburg_Counter_composition_XIII.jpg");
// }

function draw() {
// frame
  background('#141414');
  
// background
  fill('#0F0F0F');
  quad(14, 14, 539, 14, 539, 536, 14, 536);
  
// reference painting
  // image(painting, 0, 0);
  
// frame lines
  line(14, 14, 0, 0);
  line(539, 14, 553, 0);
  line(539, 536, 553, 551);
  line(14, 536, 0, 551);
  
// fill gap between red, cream, and dark grey
  strokeWeight(0);
  fill('#b2270b');
  quad(230, 300, 235, 330, 483, 73, 468, 73);
  
// black "triangle"
  fill('#100e0f');
  quad(237, 473, 70, 306, 70, 217, 236, 63);
  fill('#100e0f');
  triangle(75, 210, 230, 70, 200, 70);
  
// yellow triangle
  fill('#e2ad12');
  triangle(76, 471, 75, 311, 156, 391);
  
// white triangle
  fill('#f5f7ec');
  triangle(75, 471, 236, 471, 155, 390);
  
// top left triangle
  fill('#babdc4');
  triangle(77, 75, 216, 74, 76, 213);
  
// bottom grey triangle
  fill('#cccdd2');
  triangle(236, 471, 398, 471, 236, 309);
  
// top right grey triangle
  fill('#808082');
  triangle(475, 74, 282, 74, 378, 166);
  
// creamy triangle
  fill('#e6e0d2');
  quad(236, 309, 378, 166, 282, 74, 235, 74);
  
// red triangle
  fill('#b2270b');
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
