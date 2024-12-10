const timer = document.getElementById("timer");
let seconds = +(timer.textContent);

intervalId = setInterval(() => {
	timer.textContent = timeConverter(seconds);
	seconds--;

	if (seconds < 0) {
		clearInterval(intervalId);
		alert("Вы победили в конкурсе!")
		window.location.assign("./file/download")
	}
}, 1000);


timeConverter = (seconds) => {
	let hours = Math.floor((seconds / 3600) % 60);
	let minuts = Math.floor((seconds / 60) % 60);
	seconds = Math.floor(seconds % 60);

	hours = (hours < 10) ? '0' + hours : hours;
	minuts = (minuts < 10) ? '0' + minuts : minuts;
	seconds = (seconds < 10) ? '0' + seconds : seconds;

	return `${hours}:${minuts}:${seconds}`
}
