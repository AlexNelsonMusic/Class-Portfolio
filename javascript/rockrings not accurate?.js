document.getElementById('begin').style.visibility = 'hidden';

let hasRun = false;

function changePage() {
    
    window.location.href = "https://www.example.com";
}

if (!navigator.geolocation) {
    throw new Error('No Geolocation Available');
}

function success(pos) {
    
    const lat = pos.coords.latitude;

    const lng = pos.coords.longitude;

    const markup = 
   `<a href="https://www.openstreetmap.org/#map=17/${lat}/${lng}">
        Your current position: latitude: ${lat}, longitude: ${lng}.
    </a>`;

    document.getElementById('output').innerHTML = markup;

    // E W N S

    if (hasRun == false && lat >= 48.73177 && lat <= 48.73188 && lng <= -122.48532 && lng >= -122.48549) {

        hasRun = true;
        changePage();
    }

    // if ((lat <= x) && (lat >= y) && (lng >= -z) && (lng <= -a)) {

    // audioOne.play();

    // } else {

    //     audioOne.pause();
    //     audio.currentTime = 0;
    // }

    // if ((lat <= x) && (lat >= y) && (lng >= -z) && (lng <= -a)) {

    //     audioTwo.play();

    // } else {

    //     audioTwo.pause();
    //     audio.currentTime = 0;
    // }

    // if ((lat <= x) && (lat >= y) && (lng >= -z) && (lng <= -a)) {

    //     audioThree.play();

    // } else {

    //     audioThree.pause();
    //     audio.currentTime = 0;
    // }

    // if ((lat <= x) && (lat >= y) && (lng >= -z) && (lng <= -a)) {

    //     audioFour.play();

    // } else {

    //     audioFour.pause();
    //     audio.currentTime = 0;
    // }

    // if ((lat <= x) && (lat >= y) && (lng >= -z) && (lng <= -a)) {

    //     audioFive.play();

    // } else {

    //     audioFive.pause();
    //     audio.currentTime = 0;
    // }

    // if ((lat <= x) && (lat >= y) && (lng >= -z) && (lng <= -a)) {

    //     audioSix.play();

    // } else {

    //     audioSix.pause();
    //     audio.currentTime = 0;
    // }

    // if ((lat <= x) && (lat >= y) && (lng >= -z) && (lng <= -a)) {

    //     audioSeven.play();

    // } else {

    //     audioSeven.pause();
    //     audio.currentTime = 0;
    // }

    // if ((lat <= x) && (lat >= y) && (lng >= -z) && (lng <= -a)) {

    //     audioEight.play();

    // } else {

    //     audioEight.pause();
    //     audio.currentTime = 0;
    // }

    // if ((lat <= x) && (lat >= y) && (lng >= -z) && (lng <= -a)) {

    //     audioNine.play();

    // } else {

    //     audioNine.pause();
    //     audio.currentTime = 0;
    // }

    // if ((lat <= x) && (lat >= y) && (lng >= -z) && (lng <= -a)) {

    //     audioTen.play();

    // } else {

    //     audioTen.pause();
    //     audio.currentTime = 0;
    // }

    // if ((lat <= x) && (lat >= y) && (lng >= -z) && (lng <= -a)) {

    //     audioEleven.play();

    // } else {

    //     audioEleven.pause();
    //     audio.currentTime = 0;
    // }

    // if ((lat <= x) && (lat >= y) && (lng >= -z) && (lng <= -a)) {

    //     audioTwelve.play();

    // } else {

    //     audioTwelve.pause();
    //     audio.currentTime = 0;
    // }

    // if ((lat <= x) && (lat >= y) && (lng >= -z) && (lng <= -a)) {

    //     audioThirteen.play();

    // } else {

    //     audioThirteen.pause();
    //     audio.currentTime = 0;
    // }
}

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

navigator.geolocation.watchPosition(success, error, options);

function playAudioOne() {

    const audioOne = document.getElementById('g2');

    audioOne.play();
}

function playAudioTwo() {

    const audioTwo = document.getElementById('a2');

    audioTwo.play();
}

function playAudioThree() {

    const audioThree = document.getElementById('bb2');

    audioThree.play();
}

function playAudioFour() {

    const audioFour = document.getElementById('d3');

    audioFour.play();
}

function playAudioFive() {

    const audioFive = document.getElementById('eb3');

    audioFive.play();
}

function playAudioSix() {

    const audioSix = document.getElementById('g3');

    audioSix.play();
}

function playAudioSeven() {

    const audioSeven = document.getElementById('a3');

    audioSeven.play();
}

function playAudioEight() {

    const audioEight = document.getElementById('bb3');

    audioEight.play();
}

function playAudioNine() {

    const audioNine = document.getElementById('d4');

    audioNine.play();
}

function playAudioTen() {

    const audioTen = document.getElementById('eb4');

    audioTen.play();
}

function playAudioEleven() {

    const audioEleven = document.getElementById('g4');

    audioEleven.play();
}

function playAudioTwelve() {

    const audioTwelve = document.getElementById('a4');

    audioTwelve.play();
}

function playAudioThirteen() {

    const audioThirteen = document.getElementById('d5');

    audioThirteen.play();
}

// document.getElementById('gtwo').addEventListener('click', playAudioOne)
// document.getElementById('atwo').addEventListener('click', playAudioTwo)
// document.getElementById('bbtwo').addEventListener('click', playAudioThree)
// document.getElementById('dthree').addEventListener('click', playAudioFour)
// document.getElementById('ebthree').addEventListener('click', playAudioFive)
// document.getElementById('gthree').addEventListener('click', playAudioSix)
// document.getElementById('athree').addEventListener('click', playAudioSeven)
// document.getElementById('bbthree').addEventListener('click', playAudioEight)
// document.getElementById('dfour').addEventListener('click', playAudioNine)
// document.getElementById('ebfour').addEventListener('click', playAudioTen)
// document.getElementById('gfour').addEventListener('click', playAudioEleven)
// document.getElementById('afour').addEventListener('click', playAudioTwelve)
// document.getElementById('dfive').addEventListener('click', playAudioThirteen)
