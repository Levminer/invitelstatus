//onload
$(document).ready(function() {
	counter()
	date()
})

//counter
function counter() {
	let counter = (document.getElementById("counter").innerHTML = "12") // modify
}

//date
function date() {
	let date = (document.getElementById("date").innerHTML = "Utolsó hiba: 2020.03.31.") // modify
}

//history
function history() {
	alert("Leállások:\n 01.08 \n 01.09 \n 01.20 (2) \n 02.05 \n 02.12 \n 02.17 \n 02.19 \n 02.20 \n 03.24 \n 3.31 (2)") // modify
}
