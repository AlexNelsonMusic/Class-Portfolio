function begin() {
    document.getElementById('appear').style.visibility = ('visible');
    document.getElementById('begin').style.visibility = ('hidden');
};

document.addEventListener('click', begin)

document.getElementById('one').addEventListener('mouseover', disappearOne);
document.getElementById('one').addEventListener('mouseover', playAudio);
document.getElementById('one-two').addEventListener('mouseover', reappearOne);
document.getElementById('one-two').addEventListener('mouseover', playAudio);
document.getElementById('two').addEventListener('mouseover', disappearTwo);
document.getElementById('two').addEventListener('mouseover', playAudio);
document.getElementById('two-two').addEventListener('mouseover', reappearTwo);
document.getElementById('two-two').addEventListener('mouseover', playAudio);
document.getElementById('three').addEventListener('mouseover', disappearThree);
document.getElementById('three').addEventListener('mouseover', playAudio);
document.getElementById('three-two').addEventListener('mouseover', reappearThree);
document.getElementById('three-two').addEventListener('mouseover', playAudio);

function disappearOne() {
   document.getElementById('one').style.visibility = ('hidden');
   document.getElementById('one-two').style.visibility = ('visible');
};
    
function reappearOne() {
        document.getElementById('one').style.visibility = ('visible');
        document.getElementById('one-two').style.visibility = ('hidden');
};

function disappearTwo() {
    document.getElementById('two').style.visibility = ('hidden');
    document.getElementById('two-two').style.visibility = ('visible');
};

function reappearTwo() {
    document.getElementById('two').style.visibility = ('visible');
    document.getElementById('two-two').style.visibility = ('hidden');
};

function disappearThree() {
    document.getElementById('three').style.visibility = ('hidden');
    document.getElementById('three-two').style.visibility = ('visible');
};

function reappearThree() {
    document.getElementById('three').style.visibility = ('visible');
    document.getElementById('three-two').style.visibility = ('hidden');
};

function playAudio() {
    const audio = document.getElementById('slip');
    audio.currentTime = 0;
    audio.play();
}

