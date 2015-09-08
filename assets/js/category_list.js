function switch_fold(id)
{
  //var display=e.getAttribute("data-id");
  e = document.getElementById(id);
  element_switch=document.getElementById(id+"_switch");
  element_ul=document.getElementById(id+"_ul");
  //ee = e.parent;
  if ( element_ul.style.display == "block")
  {
    element_ul.style.display='none';
    element_switch.getElementsByTagName("img")[0].src="/assets/icons/blacks/16x16/br_next.png"
    //ee.type='circle';
  }
  else if (element_ul.style.display == "none")
  {
    element_ul.style.display='block';
    element_switch.getElementsByTagName("img")[0].src="/assets/icons/blacks/16x16/br_down.png"
    //ee.type = 'disc';
  }
  else
  {
    alert("unknown for list item.");
    //ee.type='circle';
  }
}

function change_category(id)
{
    e = document.getElementById(id);
    element_switch=document.getElementById(id+"_switch");
    element_ul=document.getElementById(id+"_ul");
    if (e != null)
    {
        element_ul.style.display='block';
        element_switch.getElementsByTagName("img")[0].src="/assets/icons/blacks/16x16/br_down.png"
    }
    //home_state = "category"
}

function change_tag(id)
{
    header1 = document.getElementById('header1');
    header1.innerHTML = "标签："+id;

    posts = document.getElementById('post-list');
    //alert(id)
    //{% for post in site.posts[page.category] %}
    //    alert({{ 'post._name' }});
    //{% endfor %}
    //children = posts.childNodes;
    //for (child in children)
    //{
    //    child.getElementById
    //}
    if (e != null)
    {
        e.style.display = "none";
    }
    //home_state = "category"
}
