function change_fold(id)
{
  //var display=e.getAttribute("data-id");
  e = document.getElementById(id);
  ee = e.parent;
  if ( e.style.display == "block")
  {
    e.style.display='none';
    //ee.type='circle';
  }
  else if (e.style.display == "none")
  {
    e.style.display='block';
    //ee.type = 'disc';
  }
  else
  {
    e.style.display='none';
    //ee.type='circle';
  }
}
