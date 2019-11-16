
const lastDay = new Date("02-17-2020 07:00:00").getTime()
// console.log(lastDay)
var x = setInterval(function () {
    const today = new Date().getTime();
    // console.log(today)
    const secondsUntilDate = lastDay - today;
    // const minutes = (secondsUntilDate / 3600) / 1000

    // const days = (secondsUntilDate / 86400) / 1000


    const days = Math.floor(secondsUntilDate / (1000 * 60 * 60 * 24));
    // console.log(days)
    const hours = Math.floor((secondsUntilDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((secondsUntilDate % (1000 * 60 * 60)) / (1000 * 60));
    // console.log(minutes)
    const seconds = Math.floor((secondsUntilDate % (1000 * 60)) / 1000);


    document.getElementById("timer").innerHTML = " Remaining: " + days + ":" + hours + ":" + minutes + ":" + seconds;

    if (secondsUntilDate < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "CONGRATULATIONS";
    }
}, 1000);