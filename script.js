let circularProgress = document.querySelector(".circular-progress");
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
    progressEndValue = 80,
    speed = 100;

let progress = setInterval(() => {
    progressStartValue++

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7C4F38 ${progressStartValue * 3.6}deg, #dfcab8 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }
    console.log(progressStartValue);

}, speed);


function updateProgress(progress1, progressBarId) {
    const progressBar = document.getElementById(progressBarId);
    progressBar.style.width = progress1 + '%';
}

function startProgressBar(progress1, intervalTime, progressBarId, stopPoint) {
    let currentProgress = 0;
    const interval = setInterval(() => {
        currentProgress += progress1;
        if (currentProgress >= stopPoint) {
            clearInterval(interval);
        }
        updateProgress(currentProgress, progressBarId);
    }, intervalTime);
}


startProgressBar(10, 3000, 'progress1', 100);
startProgressBar(5, 2000, 'progress2', 90);
startProgressBar(15, 2500, 'progress3', 80);
startProgressBar(20, 3500, 'progress4',70);
startProgressBar(25, 3000, 'progress5', 60);