const clock = document.querySelector('.clock');
const date = document.querySelector('.date');

const tick = () => {    // update time/date every second
    // format times
    const now = new Date();
    const h24 = dateFns.format(now, 'H')
    const h12 = dateFns.format(now, 'h')
    const m = dateFns.format(now, 'mm');
    const s = dateFns.format(now, 'ss');
    const ampm = dateFns.format(now, 'A');
    // military time & standard time templates
    const html1 = `Military Time: <span>${h24} : ${m} : ${s}</span>&nbsp&nbsp&nbspStandard Time: <span>${h12} : ${m} : ${s} ${ampm}</span>`;
    clock.innerHTML = html1;
    // format dates
    const month = dateFns.format(now, 'M');
    const monthShort = dateFns.format(now, 'MMM');
    const monthLong = dateFns.format(now, 'MMMM');
    const day = dateFns.format(now, 'D');
    const yearShort = dateFns.format(now, 'YY');
    const yearLong = dateFns.format(now, 'YYYY');
    // long date & military date templates
    const html2 = `Long Date: <span>${monthLong} ${day}, ${yearLong}</span>&nbsp&nbsp&nbspMilitary Date: <span>${day} ${monthShort} ${yearLong}</span><br><br><br>`;
    date.innerHTML = html2;
    // slash date & euro date templates
    const html3 = `Slash Date: <span>${month}/${day}/${yearShort}</span>&nbsp&nbsp&nbspEuro Date: <span>${day}/${month}/${yearLong}</span>`;
    date.innerHTML += html3;
};
// set tick interval for clock
setInterval(tick, 1000);
