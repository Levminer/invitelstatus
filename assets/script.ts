declare const jquery: any
declare const $: any

//?onload
$(document).ready(function () {
	counter()
	date()
	footer()
})

//?counter
let counter = () => {
	let counter: any = document.getElementById("counter")
	counter.innerHTML = "57"
	//modify "XX"
}

//?date
let date = () => {
	let date: any = document.getElementById("date")
	date.innerHTML = "Utolsó hiba: 2020.06.22."
	// modify "Utolsó hiba: XXXX.XX.XX."
}

//? footer
let footer = () => {
	let footer: any = document.getElementById("footer")
	footer.innerHTML =
		'Készítette: <a href="https://github.com/Levminer">Levminer</a> - Invitel Status V5.5 - Forráskód:	<a href="https://github.com/Levminer/invitelstatus">GitHub</a>'
	//modify "Invitel Status VX.X.X"
}

//?history
let history_2020_01 = () => {
	alert("Leállások (4): \n 01.08 \n 01.09 \n 01.20 \n 01.20")
}

let history_2020_02 = () => {
	alert("Leállások (5): \n 02.05 \n 02.12 \n 02.17 \n 02.19 \n 02.20 ")
}

let history_2020_03 = () => {
	alert("Leállások (3): \n 03.24 \n 03.31 \n 03.31")
}

let history_2020_04 = () => {
	alert("Leállások (4): \n 04.09 \n 04.14 \n 04.15 \n 04.16")
}

let history_2020_05 = () => {
	alert(
		"Leállások (22): \n 05.01 (kb. 3 óra) \n 05.01 (kb. 5 perc) \n 05.10 (kb. 20 perc) \n 05.12 (kb. 10 perc) \n 05.14 (kb. 10 perc) \n 05.14 (kb. 5 perc) \n 05.14 (kb. 15 perc) \n 05.17 (kb. 15 perc) \n 05.17 (kb. 20 perc) \n 05.18 (kb. 10 perc) \n 05.18 (kb. 30 perc) \n 05.18 (kb. 3 óra) \n 05.19 (kb. 10 perc) \n 05.19 (kb. 5 perc) \n 05.19 (kb. 20 perc) \n 05.20 (kb. 1 óra) \n 05.20 (kb. 5 perc) \n 05.21 (kb. 3 óra) \n 05.21 (kb. 30 perc) \n 05.22 (kb. 45 perc) \n 05.26 (kb. 1 óra) \n 05.28 (kb. 15 perc)"
	)
}

let history_2020_06 = () => {
	//modify "Leállások (XX)"
	alert(
		"Leállások (23): \n 06.01 (kb. 2 óra) \n 06.01 (kb. 15 perc) \n 06.02 (kb. 15 perc) \n 06.03 (kb. 1 óra) \n 06.03 (kb. 5 perc) \n 06.03 (kb. 30 perc) \n 06.05 (kb. 15 perc) \n 06.05 (kb. 45 perc) \n 06.05 (kb. 15 perc) \n 06.06 (kb. 5 perc) \n 06.06 (kb. 15 perc) \n 06.22 (12x ment el a net)"
	)
	//modify "\n XX.XX (kb. XX perc/óra)"
}
