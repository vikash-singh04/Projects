let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let second = document.querySelector('#second');

function showTime() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    hour.style.transform = `rotate(${h*30 + m/2}deg)`;
    minute.style.transform = `rotate(${m*6}deg)`;
    second.style.transform = `rotate(${s*6}deg)`;

    setInterval(showTime, 1000);
}
