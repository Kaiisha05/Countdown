
const lastDay = new Date("02-17-2020 07:00:00").getTime()


var x = setInterval(function () {
    const today = new Date().getTime();

    const secondsUntilDate = lastDay - today;

    const days = Math.floor(secondsUntilDate / (1000 * 60 * 60 * 24));
    // console.log(days)
    const hours = Math.floor((secondsUntilDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((secondsUntilDate % (1000 * 60 * 60)) / (1000 * 60));
    // console.log(minutes)
    const seconds = Math.floor((secondsUntilDate % (1000 * 60)) / 1000);


    document.getElementById("timer").innerHTML = " Remaining: " + days + ":" + hours + ":" + minutes + ":" + seconds;

    if (secondsUntilDate < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "CONGRATULATIONS, WE'RE SO PROUD OF YOU!";
    }
}, 1000);
