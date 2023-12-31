//$ no es necesario pero es html para guiarme
const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');

// Play and Pause buttons
$play.addEventListener('click',handlePlay);
$pause.addEventListener('click',handlePause);

function handlePlay(){
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

function handlePause(){
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
}

//Backward and Fordward buttons
$backward.addEventListener('click',handleBackward);
$forward.addEventListener('click',handleForward);


function handleBackward(){
    $video.currentTime = $video.currentTime - 10;
}

function handleForward(){
    $video.currentTime += 10;
}

// progress bar 
const $progress = document.querySelector('#progress');
$video.addEventListener('loadedmetadata',handleLoaded);
$video.addEventListener('timeupdate',handleTimeUpdate);

function handleLoaded(){
    $progress.max = $video.duration;
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime;
}

$progress.addEventListener('input',handleInput);

function handleInput(){
    $video.currentTime = $progress.value;
}
