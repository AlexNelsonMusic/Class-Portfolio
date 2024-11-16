const audioOne = document.getElementById('g2');
const audioTwo = document.getElementById('a2');
const audioThree = document.getElementById('bb2');
const audioFour = document.getElementById('d3');
const audioFive = document.getElementById('eb3');
const audioSix = document.getElementById('g3');
const audioSeven = document.getElementById('a3');
const audioEight = document.getElementById('bb3');
const audioNine = document.getElementById('d4');
const audioTen = document.getElementById('eb4');
const audioEleven = document.getElementById('g4');
const audioTwelve = document.getElementById('a4');
const audioThirteen = document.getElementById('d5');

let audioOneOn = false;
let audioTwoOn = false;
let audioThreeOn = false;
let audioFourOn = false;
let audioFiveOn = false;
let audioSixOn = false;
let audioSevenOn = false;
let audioEightOn = false;
let audioNineOn = false;
let audioTenOn = false;
let audioElevenOn = false;
let audioTwelveOn = false;
// changing page

let hasRun = false;
let hasRun2 = false;

function changePage() {

    hasRun = true;
    window.location.href = "begin.html";

    if (hasRun == true) {

        document.documentElement.style.backgroundImage = url('../images/ground.jpg');
      }

}

function changePageTwo() {

    window.location.href = "rockrings.html";
}

// geolocation

if (!navigator.geolocation) {
    throw new Error('No Geolocation Available');
}

function success(pos) {
    
    const lat = pos.coords.latitude;

    const lng = pos.coords.longitude;

//     const markup = 
//    `<a href="https://www.openstreetmap.org/#map=17/${lat}/${lng}">
//         Your current position: latitude: ${lat}, longitude: ${lng}.
//     </a>`;

//     document.getElementById('output').innerHTML = markup;

    // E W N S

    if (hasRun2 == false && lat >= 48.73177 && lat <= 48.73188 && lng <= -122.48532 && lng >= -122.48549) {

        hasRun2 = true;
        changePage();
    }

    if (hasRun2 == true) {
        navigator.geolocation.clearWatch;
    }
}

document.getElementById('continue').addEventListener('touchstart', changePage);
document.getElementById('start').addEventListener('touchstart', changePageTwo);

function error(err) {

    if (err.code === 1) {
        alert('You must turn on location services for your device, your default browser and this website, and allow precise tracking in order to accept this quest!');

    } else {
        alert('Cannot get geolocation data');
    }
}

const options = {

    enableHighAccuracy: true,
    timeout: 5000
};

const id = navigator.geolocation.watchPosition(success, error, options);

// buttons

window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
}; /* prevent callout menu */

document.getElementById('gtwo').addEventListener('touchstart', playAudioOne)
document.getElementById('gtwo').addEventListener('touchend', stopAudioOne)

document.getElementById('atwo').addEventListener('touchstart', playAudioTwo)
document.getElementById('atwo').addEventListener('touchend', stopAudioTwo)

document.getElementById('bbtwo').addEventListener('touchstart', playAudioThree)
document.getElementById('bbtwo').addEventListener('touchend', stopAudioThree)

document.getElementById('dthree').addEventListener('touchstart', playAudioFour)
document.getElementById('dthree').addEventListener('touchend', stopAudioFour)

document.getElementById('ebthree').addEventListener('touchstart', playAudioFive)
document.getElementById('ebthree').addEventListener('touchend', stopAudioFive)

document.getElementById('gthree').addEventListener('touchstart', playAudioSix)
document.getElementById('gthree').addEventListener('touchend', stopAudioSix)

document.getElementById('athree').addEventListener('touchstart', playAudioSeven)
document.getElementById('athree').addEventListener('touchend', stopAudioSeven)

document.getElementById('bbthree').addEventListener('touchstart', playAudioEight)
document.getElementById('bbthree').addEventListener('touchend', stopAudioEight)

document.getElementById('dfour').addEventListener('touchstart', playAudioNine)
document.getElementById('dfour').addEventListener('touchend', stopAudioNine)

document.getElementById('ebfour').addEventListener('touchstart', playAudioTen)
document.getElementById('ebfour').addEventListener('touchend', stopAudioTen)

document.getElementById('gfour').addEventListener('touchstart', playAudioEleven)
document.getElementById('gfour').addEventListener('touchend', stopAudioEleven)

document.getElementById('afour').addEventListener('touchstart', playAudioTwelve)
document.getElementById('afour').addEventListener('touchend', stopAudioTwelve)

document.getElementById('dfive').addEventListener('touchstart', playAudioThirteen)
document.getElementById('dfive').addEventListener('touchend', stopAudioThirteen)

setInterval(() => {
    if (audioOneOn == true && audioTwoOn == true && audioThreeOn == true && audioFourOn == true && audioFiveOn == true && audioSixOn == true && audioSevenOn == true && audioEightOn == true && audioNineOn == true && audioTenOn == true && audioElevenOn == true && audioTwelveOn == true) {

        document.getElementById('dfive').style.display = ('inline');

    } else {

        document.getElementById('dfive').style.display = ('none');
    }

  }, 1000); 

// play

function playAudioOne() {

    audioOneOn = true
    audioOne.play();
}

function playAudioTwo() {

    audioTwoOn = true;
    audioTwo.play();
}

function playAudioThree() {

    audioThreeOn = true;
    audioThree.play();
}

function playAudioFour() {

    audioFourOn = true;
    audioFour.play();
}

function playAudioFive() {

    audioFiveOn = true;
    audioFive.play();
}

function playAudioSix() {

    audioSixOn = true;
    audioSix.play();
}

function playAudioSeven() {

    audioSevenOn = true;
    audioSeven.play();
}

function playAudioEight() {

    audioEightOn = true
    audioEight.play();
}

function playAudioNine() {

    audioNineOn = true;
    audioNine.play();
}

function playAudioTen() {

    audioTenOn = true;
    audioTen.play();
}

function playAudioEleven() {

    audioElevenOn = true;
    audioEleven.play();
}

function playAudioTwelve() {

    audioTwelveOn = true;
    audioTwelve.play();
}

function playAudioThirteen() {

    audioThirteen.play();
}

// stop

function stopAudioOne() {

    audioOneOn = false;
    audioOne.pause();
    audioOne.currentTime = 0;
}

function stopAudioTwo() {

    audioTwoOn = false;
    audioTwo.pause();
    audioTwo.currentTime = 0;
}

function stopAudioThree() {

    audioThreeOn = false;
    audioThree.pause();
    audioThree.currentTime = 0;
}

function stopAudioFour() {

    audioFourOn = false;
    audioFour.pause();
    audioFour.currentTime = 0;
}

function stopAudioFive() {

    audioFiveOn = false;
    audioFive.pause();
    audioFive.currentTime = 0;
}

function stopAudioSix() {

    audioSixOn = false;
    audioSix.pause();
    audioSix.currentTime = 0;
}

function stopAudioSeven() {

    audioSevenOn = false;
    audioSeven.pause();
    audioSeven.currentTime = 0;
}

function stopAudioEight() {

    audioEightOn = false;
    audioEight.pause();
    audioEight.currentTime = 0;
}

function stopAudioNine() {

    audioNineOn = false;
    audioNine.pause();
    audioNine.currentTime = 0;
}

function stopAudioTen() {

    audioTenOn = false;
    audioTen.pause();
    audioTen.currentTime = 0;
}

function stopAudioEleven() {

    audioElevenOn = false;
    audioEleven.pause();
    audioEleven.currentTime = 0;
}

function stopAudioTwelve() {

    audioTwelveOn = false;
    audioTwelve.pause();
    audioTwelve.currentTime = 0;
}

function stopAudioThirteen() {

    audioThirteen.pause();
    audioThirteen.currentTime = 0;
}
