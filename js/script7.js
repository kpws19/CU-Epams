var count=0;
function readed()
{
  var fg=0;
  for(var k=0;k<7;k++)
  {
    if(document.getElementsByClassName('className')[k].checked==false)
    {
      fg=fg+1;
    }
  }
  if(fg==7)
  {
    document.getElementById('middle').style.display="none";
  }
}
document.ready(function(){
  readed();
});
//###################################################################################//
//FUNCTION FOR SELECTING ALL ALERTS
function allselected()
{
  var i=0;
  var a;
  if(document.getElementsByClassName('checkhere')[i] != null)
  {
      document.getElementById('middle').setAttribute("style","display: block");
  }
  for(i=0;i<20;i++)
  {
    a = document.getElementsByClassName('checkbox')[i];
    //console.log(a.value);
    a.setAttribute("checked","checked");
    document.getElementsByClassName('checkhere')[i].setAttribute("style","color: black");
    document.getElementsByClassName('checkhere')[i].style.backgroundColor="rgb(123, 251, 248)";
    document.getElementsByClassName('checkhere')[i].style.border="1px solid black";
    //document.getElementsByClassName('checkhere')[i].style.margin="10px";
    document.getElementsByClassName('checkhere')[i].style.borderRadius="5px";
    document.getElementsByClassName('checkhere')[0].style.color="blue";
    document.getElementsByClassName('checkbox')[i].checked="true";
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
    if(document.getElementsByClassName('checkbox')[i].checked == true)
    {
      document.getElementsByClassName('checkhere')[i].setAttribute("style","display: none;");
    }
  }
}
//FUNCTION OR MOVE TO TRASH
function movetotrash()
{
    document.getElementById('trash').style.display="none";
    if(count<=10)
    {
        document.getElementById('trash-half').style.display="inline";
        document.getElementById('trash-full').style.display="none";
    }
    else
    {
        document.getElementById('trash-full').style.display="inline";
        document.getElementById('trash-half').style.display="none";
    }
    permanentdelete();
}
//MOVE TO SPAM
function movetospam()
{
  document.getElementById('spam').style.border="1px red solid";
  permanentdelete();
}
//FUNCTION FOR IMPROVING CHECKBOX BUTTON
function world()
{
  var j=0;
  var cnt=0;
  for(j=0;j<7;j++)
  {
    if(document.getElementsByClassName('checkbox')[j].checked == true)
    {
      document.getElementsByClassName('checkhere')[j].setAttribute("style","color: black");
      document.getElementsByClassName('checkhere')[j].style.backgroundColor="rgb(123, 251, 248)";
      document.getElementsByClassName('checkhere')[j].style.border="1px solid black";
      document.getElementsByClassName('checkhere')[j].style.borderRadius="5px";
      document.getElementById('middle').style.display="block";
    }
    else if(document.getElementsByClassName('checkbox')[j].checked == false)
    {
      document.getElementsByClassName('checkhere')[j].setAttribute("style","color: none");
      document.getElementsByClassName('checkhere')[j].style.backgroundColor="none";
      document.getElementsByClassName('checkhere')[j].style.border="none";
      document.getElementsByClassName('checkhere')[j].style.borderRadius="none";
      cnt=cnt+1;
    }
  }
  if(cnt==7)
  {
      document.getElementById('middle').style.display="none";
  }
}
