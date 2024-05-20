const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// const currentYear = new Date().getFullYear;
// const newYearTime = new Date(`January 01 ${currentYear+2} 00:00:00`);
const currentYear = new Date().getFullYear();

// Create a new Date object for January 1st of the next year
const newYearTime = new Date(`January 01 ${currentYear + 2} 00:00:00`);

function updateCounttime(){
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;
    day.innerHTML = d;
    hour.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
    
}


setInterval(updateCounttime,1000)