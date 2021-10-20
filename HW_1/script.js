const localTime = document.querySelector('.local-time');
const londonTime = document.querySelector('.london-time');

function getLocalTime() {
    const now = new Date();

    const hours = (now.getHours() < 10 ? '0' : '') + now.getHours();
    const min = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    const sec = (now.getSeconds() < 10 ? '0' : '') + now.getSeconds();

    localTime.textContent = `${hours}:${min}:${sec}`;
}

setInterval(getLocalTime, 1000);

function getLondonTime() {
    const now = new Date();

    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'Europe/London'
    };

    const time = now.toLocaleString('en-GB', options);

    londonTime.textContent = time;
}

setInterval(getLondonTime, 1000);