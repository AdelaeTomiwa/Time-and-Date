// Selectors
const time = document.querySelector('.time');
const date = document.querySelector('.date');

const setAmPm = true;

function displayTime() {
   // let currentTime = new Date(2012, 06, 10, 13, 33, 30);

   var currentTime = new Date();
   var currentHour = currentTime.getHours();
   var currentMins = currentTime.getMinutes();
   var currentSec = currentTime.getSeconds();
   var currentDate = currentTime.getDate();
   var currentYear = currentTime.getFullYear();
   var currentMonth = currentTime.getMonth();

   // Check if it is AM or PM
   const amPm = currentHour <= 12 ? 'AM' : 'PM';

   // Change Format to 12
   currentHour = currentHour % 12 || 12;

   time.innerHTML = `
      ${currentHour}<span>:</span>${addZero(currentMins)}<span>:<span>${addZero(
      currentSec
   )} ${setAmPm ? amPm : ''}
   `;

   date.innerHTML = `
         ${currentMonth}<span>/</span>${currentDate}<span>/<span>${currentYear}
   `;

   setTimeout(displayTime, 1000);
}

function addZero(number) {
   return (parseInt(number, 10) < 10 ? '0' : '') + number;
}

// Run Function
displayTime();
