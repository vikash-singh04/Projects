function showTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let session = 'AM';

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;


    if (hours == 0) {
        hours = 12;
    } else if (hours > 12) {
        hours -= 12;
        session = 'PM';
    }

    let time = `${hours} : ${minutes} : ${seconds} ${session}`;
    document.querySelector('h1').textContent = time;

    setTimeout(showTime, 1000);
}