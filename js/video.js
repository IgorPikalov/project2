let video;
let durationControl;
let soundControl;
let intervalId;

document.addEventListener('DOMContentLoaded', (e) =>{

    video = document.getElementById('video');

    video.addEventListener('click', playStop);

    let playButtons = document.querySelectorAll('.play');
    for(let i = 0; i < playButtons.length; i++) {
        playButtons[i].addEventListener('click',playStop);
    };

    let micControl = document.getElementById('micLevel');
    micControl.addEventListener('click', soundOf);

    durationControl = document.getElementById('durationLevel');

    durationControl.min = 0;
    durationControl.value = 0;

    soundControl = document.getElementById('volumeLevel');

    soundControl.min = 0;
    soundControl.max = 10;

    soundControl.value = soundControl.max;

});

function playStop(){
    let playImg = document.querySelector('.video__play');
    playImg.classList.toggle('video__play--active');

    if(video.paused){
        video.play();
        intervalId = setInterval(updateDuration, 1000/66);
    } else {
        video.pause();
    }
};

function stopInterval(){
    video.pause();
    clearInterval(intervalId);
};

function updateDuration() {
    durationControl.value = video.currentTime;
};

function setVideoDuration(){
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }

    video.currentTime = durationControl.value;
    intervalId = setInterval(updateDuration, 1000/66);

};

function changeSoundVolume(){
    video.volume = soundControl.value / 10;
};

function soundOf(){
    if(video.volume == 0){
        video.volime = soundLevel;
        soundControl.value = soundLevel * 10;
    } else {
        soundLevel = video.volume;
        video.volume = 0;
        soundControl.value = 0;
    }
};
