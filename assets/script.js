//onload
$(document).ready(function () {
	counter()
	date()
})

//counter
function counter() {
	let counter = (document.getElementById("counter").innerHTML = "23") // modify
}

//date
function date() {
	let date = (document.getElementById("date").innerHTML = "Utolsó hiba: 2020.05.14.") // modify
}

//history
function history() {
	alert(
		"Leállások:\n 01.08 \n 01.09 \n 01.20 \n 01.20 \n 02.05 \n 02.12 \n 02.17 \n 02.19 \n 02.20 \n 03.24 \n 03.31 \n 03.31 \n 04.09 \n 04.14 \n 04.15 \n 04.16 \n 05.01 (kb. 3 óra) \n 05.01 (kb. 4 perc) \n 05.10 (kb. 20 perc) \n 05.12 (kb. 10 perc) \n 05.14 (kb. 10 perc) \n 05.14 (kb. 5 perc) \n 05.14 (kb. 15 perc)"
	) // modify
}
