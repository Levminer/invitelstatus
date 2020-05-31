//?onload
$(document).ready(function () {
    counter();
    date();
    footer();
});
//?counter
var counter = function () {
    var counter = document.getElementById("counter");
    counter.innerHTML = "38";
    //modify "XX"
};
//?date
var date = function () {
    var date = document.getElementById("date");
    date.innerHTML = "Utolsó hiba: 2020.05.28.";
    // modify "Utolsó hiba: XXXX.XX.XX."
};
//? footer
var footer = function () {
    var footer = document.getElementById("footer");
    footer.innerHTML =
        'Készítette: <a href="https://github.com/Levminer">Levminer</a> - Invitel Status V5.3 - Forráskód:	<a href="https://github.com/Levminer/invitelstatus">GitHub</a>';
    //modify "Invitel Status VX.X.X"
};
//?history
var history_2020_01 = function () {
    alert("Leállások (4): \n 01.08 \n 01.09 \n 01.20 \n 01.20");
};
var history_2020_02 = function () {
    alert("Leállások (5): \n 02.05 \n 02.12 \n 02.17 \n 02.19 \n 02.20 ");
};
var history_2020_03 = function () {
    alert("Leállások (3): \n 03.24 \n 03.31 \n 03.31");
};
var history_2020_04 = function () {
    alert("Leállások (4): \n 04.09 \n 04.14 \n 04.15 \n 04.16");
};
var history_2020_05 = function () {
    alert(
    //modify "Leállások (XX)"
    "Leállások (20): \n 05.01 (kb. 3 óra) \n 05.01 (kb. 5 perc) \n 05.10 (kb. 20 perc) \n 05.12 (kb. 10 perc) \n 05.14 (kb. 10 perc) \n 05.14 (kb. 5 perc) \n 05.14 (kb. 15 perc) \n 05.17 (kb. 15 perc) \n 05.17 (kb. 20 perc) \n 05.18 (kb. 10 perc) \n 05.18 (kb. 30 perc) \n 05.18 (kb. 3 óra) \n 05.19 (kb. 10 perc) \n 05.19 (kb. 5 perc) \n 05.19 (kb. 20 perc) \n 05.20 (kb. 1 óra) \n 05.20 (kb. 5 perc) \n 05.21 (kb. 3 óra) \n 05.21 (kb. 30 perc) \n 05.22 (kb. 45 perc) \n 05.26 (kb. 1 óra) \n 05.28 (kb. 15 perc)"
    //modify "\n XX.XX (kb. XX perc/óra)"
    );
};
