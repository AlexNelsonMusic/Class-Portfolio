let leftGrey = '#babdc4';
let rightGrey = '#808082';
let loGrey = '#cccdd2';
let black = '#100e0f'
let yellow = '#e2ad12';
let white = '#f5f7ec';
let cream = '#e6e0d2';
let red = '#b2270b';

let rUpOne = true;
let gUpOne = true;
let bUpOne = true;

let rUpTwo = true;
let gUpTwo = true;
let bUpTwo = true;

let rUpThree = true;
let gUpThree = true;
let bUpThree = true;

let rUpFour = true;
let gUpFour = true;
let bUpFour = true;

let rUpFive = true;
let gUpFive = true;
let bUpFive = true;

let rUpSix = true;
let gUpSix = true;
let bUpSix = true;

let rUpSeven = true;
let gUpSeven = true;
let bUpSeven = true;

let rUpEight = true;
let gUpEight = true;
let bUpEight = true;

let rOne = 2;
let gOne = 150;
let bOne = 255;

let rTwo = 151;
let gTwo = 90;
let bTwo = 172;

let rThree = 20;
let gThree = 70;
let bThree = 210;

let rFour = 139;
let gFour = 75;
let bFour = 94;

let rFive = 1;
let gFive = 69;
let bFive = 230;

let rSix = 240;
let gSix = 172;
let bSix = 110;

let rSeven = 50;
let gSeven = 150;
let bSeven = 200;

let rEight = 10;
let gEight = 112;
let bEight = 240;

let hasRun = false;
let repeat;

const increment = 1;
const ceiling = 255;

function setup() {
  createCanvas(553, 551);
}

// generate values for color fade

// color variables from top to bottom
function rFadeOne() {
  if (rUpOne == true && rOne <= ceiling) {
    rOne += increment;
    if (rOne == ceiling) {
      rUpOne = false;
    }
  } else {
      rUpOne = false;
      rOne -= increment;
      if (rOne == 0) {
        rUpOne = true;
      }
  }
}
function gFadeOne() {
  if (gUpOne == true && gOne <= ceiling) {
    gOne += increment;

    if (gOne == ceiling) {
      gUpOne = false;
    }
  } else {
      gUpOne = false
      gOne -= increment;

      if (gOne == 0) {
        gUpOne = true;
      }
  }
}
function bFadeOne() {
  if (bUpOne == true && bOne <= ceiling) {
    bOne += increment;

    if (bOne == ceiling) {
      bUpOne = false;
    }
  } else {
      bUpOne = false
      bOne -= increment;

      if (bOne == 0) {
        bUpOne = true;
      }
  }
}
setInterval(rFadeOne, 10);
setInterval(gFadeOne, 10);
setInterval(bFadeOne, 10);
function rFadeTwo() {
  if (rUpTwo == true && rTwo <= ceiling) {
    rTwo += increment;
    if (rTwo == ceiling) {
      rUpTwo = false;
    }
  } else {
      rUpTwo = false;
      rTwo -= increment;
      if (rTwo == 0) {
        rUpTwo = true;
      }
  }
}
function gFadeTwo() {
  if (gUpTwo == true && gOne <= ceiling) {
    gOne += increment;

    if (gOne == ceiling) {
      gUpTwo = false;
    }
  } else {
      gUpTwo = false
      gOne -= increment;

      if (gOne == 0) {
        gUpTwo = true;
      }
  }
}
function bFadeTwo() {
  if (bUpTwo == true && bOne <= ceiling) {
    bOne += increment;

    if (bOne == ceiling) {
      bUpTwo = false;
    }
  } else {
      bUpTwo = false
      bOne -= increment;

      if (bOne == 0) {
        bUpTwo = true;
      }
  }
}
setInterval(rFadeTwo, 10);
setInterval(gFadeTwo, 10);
setInterval(bFadeTwo, 10);
function rFadeThree() {
    if (rUpThree == true && rThree <= ceiling) {
      rThree += increment;
      if (rThree == ceiling) {
        rUpThree = false;
      }
    } else {
        rUpThree = false;
        rThree -= increment;
        if (rThree == 0) {
          rUpThree = true;
        }
    }
  }
function gFadeThree() {
    if (gUpThree == true && gThree <= ceiling) {
      gThree += increment;
  
      if (gThree == ceiling) {
        gUpThree = false;
      }
    } else {
        gUpThree = false
        gThree -= increment;
  
        if (gThree == 0) {
          gUpThree = true;
        }
    }
  }
function bFadeThree() {
    if (bUpThree == true && bThree <= ceiling) {
      bThree += increment;
  
      if (bThree == ceiling) {
        bUpThree = false;
      }
    } else {
        bUpThree = false
        bThree -= increment;
  
        if (bThree == 0) {
          bUpThree = true;
        }
    }
  }
setInterval(rFadeThree, 10);
setInterval(gFadeThree, 10);
setInterval(bFadeThree, 10);
function rFadeFour() {
    if (rUpFour == true && rFour <= ceiling) {
      rFour += increment;
      if (rFour == ceiling) {
        rUpFour = false;
      }
    } else {
        rUpFour = false;
        rFour -= increment;
        if (rFour == 0) {
          rUpFour = true;
        }
    }
  }
function gFadeFour() {
    if (gUpFour == true && gFour <= ceiling) {
      gFour += increment;
  
      if (gFour == ceiling) {
        gUpFour = false;
      }
    } else {
        gUpFour = false
        gFour -= increment;
  
        if (gFour == 0) {
          gUpFour = true;
        }
    }
  }
function bFadeFour() {
    if (bUpFour == true && bFour <= ceiling) {
      bFour += increment;
  
      if (bFour == ceiling) {
        bUpFour = false;
      }
    } else {
        bUpFour = false
        bFour -= increment;
  
        if (bFour == 0) {
          bUpFour = true;
        }
    }
  }
setInterval(rFadeFour, 10);
setInterval(gFadeFour, 10);
setInterval(bFadeFour, 10);
function rFadeFive() {
    if (rUpFive == true && rFive <= ceiling) {
      rFive += increment;
      if (rFive == ceiling) {
        rUpFive = false;
      }
    } else {
        rUpFive = false;
        rFive -= increment;
        if (rFive == 0) {
          rUpFive = true;
        }
    }
  }
function gFadeFive() {
    if (gUpFive == true && gFive <= ceiling) {
      gFive += increment;
  
      if (gFive == ceiling) {
        gUpFive = false;
      }
    } else {
        gUpFive = false
        gFive -= increment;
  
        if (gFive == 0) {
          gUpFive = true;
        }
    }
  }
function bFadeFive() {
    if (bUpFive == true && bFive <= ceiling) {
      bFive += increment;
  
      if (bFive == ceiling) {
        bUpFive = false;
      }
    } else {
        bUpFive = false
        bFive -= increment;
  
        if (bFive == 0) {
          bUpFive = true;
        }
    }
  }
setInterval(rFadeFive, 10);
setInterval(gFadeFive, 10);
setInterval(bFadeFive, 10);
function rFadeSix() {
    if (rUpSix == true && rSix <= ceiling) {
      rSix += increment;
      if (rSix == ceiling) {
        rUpSix = false;
      }
    } else {
        rUpSix = false;
        rSix -= increment;
        if (rUpSix == 0) {
          rUpSix = true;
        }
    }
  }
function gFadeSix() {
    if (gUpSix == true && gSix<= ceiling) {
      gSix += increment;
  
      if (gSix == ceiling) {
        gUpSix = false;
      }
    } else {
        gUpSix = false
        gSix -= increment;
  
        if (gSix == 0) {
          gUpSix = true;
        }
    }
  }
function bFadeSix() {
    if (bUpSix == true && bSix <= ceiling) {
      bSix += increment;
  
      if (bSix == ceiling) {
        bUpSix = false;
      }
    } else {
        bUpSix = false
        bSix -= increment;
  
        if (bSix == 0) {
          bUpSix = true;
        }
    }
  }
setInterval(rFadeSix, 10);
setInterval(gFadeSix, 10);
setInterval(bFadeSix, 10);
function rFadeSeven() {
    if (rUpSeven == true && rSeven <= ceiling) {
      rSeven += increment;
      if (rSeven == ceiling) {
        rUpSeven = false;
      }
    } else {
        rUpSeven = false;
        rSeven -= increment;
        if (rUpSeven == 0) {
          rUpSeven = true;
        }
    }
  }
function gFadeSeven() {
    if (gUpSeven == true && gSeven<= ceiling) {
      gSeven += increment;
  
      if (gSeven == ceiling) {
        gUpSeven = false;
      }
    } else {
        gUpSeven = false
        gSeven -= increment;
  
        if (gSeven == 0) {
          gUpSeven = true;
        }
    }
  }
function bFadeSeven() {
    if (bUpSeven == true && bSeven <= ceiling) {
      bSeven += increment;
  
      if (bSeven == ceiling) {
        bUpSeven = false;
      }
    } else {
        bUpSeven = false
        bSeven -= increment;
  
        if (bSeven == 0) {
          bUpSeven = true;
        }
    }
  }
setInterval(rFadeSeven, 10);
setInterval(gFadeSeven, 10);
setInterval(bFadeSeven, 10);
function rFadeEight() {
    if (rUpEight == true && rEight <= ceiling) {
      rEight += increment;
      if (rEight == ceiling) {
        rUpEight = false;
      }
    } else {
        rUpEight = false;
        rEight -= increment;
        if (rUpEight == 0) {
          rUpEight = true;
        }
    }
  }
function gFadeEight() {
    if (gUpEight == true && gEight <= ceiling) {
      gEight += increment;
  
      if (gEight == ceiling) {
        gUpEight = false;
      }
    } else {
        gUpEight = false;
        gEight -= increment;
  
        if (gEight == 0) {
          gUpEight = true;
        }
    }
  }
function bFadeEight() {
    if (bUpEight == true && bEight <= ceiling) {
      bEight += increment;
  
      if (bEight == ceiling) {
        bUpEight = false;
      }
    } else {
        bUpEight = false;
        bEight -= increment;
  
        if (bEight == 0) {
          bUpEight = true;
        }
    }
  }
setInterval(rFadeEight, 10);
setInterval(gFadeEight, 10);
setInterval(bFadeEight, 10);

// toggle color fade
function startLoop() {
  repeat = setInterval(mouseClicked, 10);
}
function stopLoop() {
  clearInterval(repeat);
}
function mouseClicked() {
  if (hasRun == false) {
  hasRun = true;
  startLoop();
  } else if (hasRun == true) {
  leftGrey = color(rOne, gOne, bOne);
  rightGrey = color(rTwo, gTwo, bTwo);
  loGrey = color(rThree, gThree, bThree);
  black = color(rFour, gFour, bFour);
  yellow = color(rFive, gFive, bFive);
  white = color(rSix, gSix, bSix);
  cream = color(rSeven, gSeven, bSeven);
  red = color(rEight, gEight, bEight);
  }
}
function keyPressed() {
  if (keyCode == 32){
    stopLoop();
    hasRun = false;
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