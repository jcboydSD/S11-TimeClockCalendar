const clock = document.querySelector('.clock');

// update time every second
const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const html = `<span>${h}</span> : <span>${m}</span> : <span>${s}</span>`;
    clock.innerHTML = html;
};
// set tick interval for clock
setInterval(tick, 1000);







// ******************** NOTES ***************************

const now2 = new Date();
const before = new Date('February 1, 2020 7:30:59');
console.log(now2.getTime(), before.getTime());

const diff = now2.getTime() - before.getTime();
console.log(diff);
const mins = Math.round(diff / 1000 / 60);   // 1000 mili-seconds in second, 60 seconds in minutes
console.log('difference in minutes: ', mins);
const hours = Math.round(diff / 1000 / 60 / 60);   // 1000 mili-seconds in second, 60 seconds in minutes
console.log('difference in hours: ', hours);
const days = Math.round(diff / 1000 / 60 / 60 / 24);   // 1000 mili-seconds in second, 60 seconds in minutes
console.log('difference in days: ', days);
console.log(`the blog was written ${days} days ago`);
console.log('');

// converting timestamps into date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp));
console.log('');

// year, month, day, time
console.log('getFullYear: ', now2.getFullYear());
console.log('getMonth (0-based): ', now2.getMonth());
console.log('getDate: ', now2.getDate());
console.log('getDay (of week, 0-based): ', now2.getDay());
console.log('getHours: ', now2.getHours());
console.log('getMinutes: ', now2.getMinutes());
console.log('getSeconds: ', now2.getSeconds());

// timestamps
console.log('timestamp (number of mili-seconds since Jan 1, 1970): ', now2.getTime());

// date strings
console.log('toDateString: ', now2.toDateString());
console.log('toTimeString: ', now2.toTimeString());
console.log('toLocaleString: ', now2.toLocaleString());
console.log('');
console.log('');

// ******************** FNS NOTES ***************************

console.log(dateFns.isToday(now2));  // checks date against current day

// formatting options
console.log(dateFns.format(now2, 'YYYY'));
console.log(dateFns.format(now2, 'MMMM'));
console.log(dateFns.format(now2, 'dddd'));
console.log(dateFns.format(now2, 'Do'));
console.log(dateFns.format(now2, 'dddd, MMMM Do, YYYY'));

// comparing dates
const before2 = new Date('February 1 2020 12:00:00');
console.log(dateFns.distanceInWords(now2, before2, {addSuffix: true}));

