// Selectors
const time = document.querySelector('.time');
const date = document.querySelector('.date');

function showTime() {
   var currentTime = new Date();
   var currentHour = currentTime.getHours();
   var currentMins = currentTime.getMinutes();
   var currentSec = currentTime.getSeconds();
   var currentDate = currentTime.getDate();
   var currentYear = currentTime.getFullYear();
   var currentMonth = currentTime.getMonth();

   // Change Format to 12
   currentHour = currentHour % 12 || 12;

   time.innerHTML = `
      ${currentHour}<span>:</span>${addZero(currentMins)}<span>:<span>${addZero(
      currentSec
   )}
   `;

   date.innerHTML = `
         ${currentMonth}<span>/</span>${currentDate}<span>/<span>${currentYear}
   `;

   setTimeout(showTime, 1000);
}

function addZero(n) {
   return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Run Function
showTime();
