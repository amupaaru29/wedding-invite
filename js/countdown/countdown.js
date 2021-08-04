
(function () {
	const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let wedding = "August 27, 2021 10:56:00",
        countDown = new Date(wedding).getTime(),
        x = setInterval(function() {

			let now = new Date().getTime(),
				daysLeft = countDown - now;

			document.getElementById("days").innerText = Math.floor(daysLeft / (day)),
            document.getElementById("hours").innerText = Math.floor((daysLeft % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((daysLeft % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((daysLeft % (minute)) / second);
        //do something later when date is reached
        if (daysLeft < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
		}
      }, 0)
  }());

