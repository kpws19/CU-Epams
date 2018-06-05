function openDetail(evt, cityName) {
    var i, toffeecontent, toffee;
    toffeecontent = document.getElementsByClassName("toffeecontent");
    for (i = 0; i < toffeecontent.length; i++) {
        toffeecontent[i].style.display = "none";
    }
    toffee = document.getElementsByClassName("toffee");
    for (i = 0; i < toffee.length; i++) {
        toffee[i].className = toffee[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}