// Set the date we're counting down to
const countDownDate = new Date("August 5, 2024 17:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in de element with id="countdown_timer" in the HTML
    document.getElementById("countdown_timer").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is finished, --> Chapter 1 release
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown_timer").innerHTML =
        "Chapter 1 has been released!";
    }
}, 1000);
