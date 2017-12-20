var count=0;
//FUCNTION FOR SELECTING ALL ALERTS
function allselected()
{
  var i=0;
  var a;
  document.getElementById('middle').setAttribute("style","display: block");
  for(i=0;i<20;i++)
  {
    a = document.getElementsByClassName('checkbox')[i];
    //console.log(a.value);
    a.setAttribute("checked","checked");
    document.getElementsByClassName('checkhere')[i].setAttribute("style","color: black");
    document.getElementsByClassName('checkhere')[i].style.backgroundColor="rgb(123, 251, 248)";
    document.getElementsByClassName('checkhere')[0].style.color="blue";
    count++;
    if(document.getElementsByClassName('checkhere')[i] == null)
    {
      break;
    }
  }
}
//FUNCTION FOR MARK ALL AS READ
function allread()
{
  var i=0;
  for(i=0;i<count;i++)
  {
      document.getElementsByClassName('checkhere')[i].style.color="black";
  }
}
//FUNCTION FOR PERMANENT DELETE
function permanentdelete()
{
  var i;
  for(i=0;i<count;i++)
  {
      document.getElementsByClassName('checkhere')[i].setAttribute("style","display: none;");
  }
}
//FUNCTION OR MOVE TO TRASH
function movetotrash()
{
    document.getElementById('trash').style.display="none";
    document.getElementById('trash-half').style.display="inline";
    permanentdelete();
}
//MOVE TO SPAM
function movetospam()
{
  document.getElementById('spam').style.backgroundColor="red";
  permanentdelete();
}
