const hrs = document.querySelector('#hrs');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {
    const corentTime = new Date();
    
    hrs.innerHTML = corentTime.getHours();
    min.innerHTML = corentTime.getMinutes();
    sec.innerHTML = corentTime.getSeconds();

    if(corentTime.getHours() < 10){
        hrs.innerHTML = '0' + corentTime.getHours();
    }
    if(corentTime.getMinutes() < 10){
        min.innerHTML = '0' + corentTime.getMinutes();
    }
    if(corentTime.getSeconds() < 10){
        sec.innerHTML = '0' + corentTime.getSeconds();
    }
}, 1000);
