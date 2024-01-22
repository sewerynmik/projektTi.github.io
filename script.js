function motyw() {
    var x = document.getElementById("mot");
    if(x.className == "sun" || x.className == "sun .toSun") {
        x.className = "moon .toMoon";
    } else {
        x.className = "sun .toSun";
    }
}

document.getElementById("mot").addEventListener("click", motyw);

