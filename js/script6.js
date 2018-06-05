//javascript for personnal info.
/*
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    document.getElementById('hide').style.display="none";
    document.getElementById('hides').style.display="none";
    document.getElementById('gaurav').style.display="block";
    evt.currentTarget.className += " active";
}
*/
function openCity() {
    /*
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    */
    document.getElementById('London').style.display = "block";
    document.getElementById('hide').style.display="none";
    document.getElementById('hides').style.display="none";
    document.getElementById('gaurav').style.display="block";
    document.getElementsByClassName('wrapper col4')[0].style.display="none";
    document.getElementsByClassName('wrapper col5')[0].style.display="none";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
// for personal details
function personalcontent()
{
  document.getElementById('data').style.display = "block";
}
/*########################FOR MENU BAR IN PERSONNAL INFO##################################*/
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
    document.getElementById('data').style.display = "none";
    evt.currentTarget.className += " active";
}
