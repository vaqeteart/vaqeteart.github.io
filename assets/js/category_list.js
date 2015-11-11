function create_categories(category, level, countmap)
{
    var line = "";
    if(category.children == null)
    {
        if (level > 0)
        {
            /*<li id="xxx" class="categories_item_tree">*/
            line += "<li id='" + category.id  + "' class='categories_item_tree'>";

            /*<span id="categories_note_switch" class="tree_switch">○</span>*/
            line += "<span id='" + category.id 
            + "_switch' class='tree_switch'>○</span>";
            /*<a href="/categories/xxx" >*/ 
            line += "<a href='" + category.path + "'>";
            /*<span id="categories_note_title">记事</span>*/
            line += "<span id='" + category.id +"_title'>" + category.title 
            + "</span>";

            /*<span id="categories_note_count">({{site.categories.note|size}})</span>*/
            line += "<span id='" + category.id + "_count'>(" 
            + (typeof(countmap[category.path]) == "undefined"?
                0:countmap[category.path]) 
            + ")</span>";
            line += "</a>";

            /*</li>*/
            line += "</li>";
        }
        else if(0 == level){
            ;
        }
        document.write(line);
        line = "";
    }
    else {
        if (level > 0)
        {
            /*<li id="xxx" class="categories_item_tree">*/
            line += "<li id='" + category.id  + "' class='categories_item_tree'>";

            /*<span id="categories_note_switch" class="tree_switch" onclick="switch_fold('categories_note')">▷</span>*/
            line += "<span id='" + category.id 
            + "_switch' class='tree_switch' onclick=\"switch_fold('"
            + category.id + "')\">▷</span>";

            /*<a href="/categories/xxx" >*/ 
            line += "<a href='" + category.path + "'>";

            /*<span id="categories_note_title">记事</span>*/
            line += "<span id='" + category.id +"_title'>" + category.title 
            + "</span>";

            /*<span id="categories_note_count">({{site.categories.note|size}})</span>*/
            line += "<span id='" + category.id + "_count'>(" 
            + (typeof(countmap[category.path]) == "undefined"?
                0:countmap[category.path]) 
            + ")</span>";
            line += "</a>";

            /*<ul id="categories_note_ul" class="categories_level1" style="display:none;">*/
            line += "<ul id='" + category.id + "_ul' class='categories_level"
            + level + "' type='none' style=display:none;'>";
        }
        else if(0 == level){
            /*<ul id="xxx_ul" class="categories_level0" type="none">*/
            line += "<ul id='" + category.id + "_ul' class='categories_level"
            + level + "' type='none'>";
        }
        document.write(line);
        line = "";

        for(var key in category.children)
        {
            create_categories(category.children[key], level+1, countmap);
        }
        /*</ul>*/
        line += "</ul>";
        /*</li>*/
        line += "</li>";
        document.write(line);
        line = "";
    }
}


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
    element_switch.innerHTML="▷";
    //element_switch.getElementsByTagName("img")[0].src="/assets/icons/blacks/16x16/br_next.png"
    //ee.type='circle';
  }
  else if (element_ul.style.display == "none")
  {
    element_ul.style.display='block';
    //element_switch.getElementsByTagName("img")[0].src="/assets/icons/blacks/16x16/br_down.png";
    element_switch.innerHTML="▽";
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
    //id.replace(/\//g, "_");
    //alert(id);
    e = document.getElementById(id);
    element_switch=document.getElementById(id+"_switch");
    element_ul=document.getElementById(id+"_ul");
    if (e != null)
    {
        element_ul.style.display='block';
        //element_switch.getElementsByTagName("img")[0].src="/assets/icons/blacks/16x16/br_down.png";
        element_switch.innerHTML="▽";
    }
    //home_state = "category"
}

function change_categories(cats)
{
    cats = cats.split("_");
    var ids = new Array(cats.length);
    
    for (i = 0; i < cats.length; ++i)
    {
	var path = new Array(i+1);

        for (j = 0; j < path.length; ++j)
        {
	    path[j] = cats[j];
	}
	
        ids[i] = path.join("_");
    }

    for (i = 0; i < ids.length; ++i)
    {
        e = document.getElementById(ids[i]);
        element_switch=document.getElementById(ids[i]+"_switch");
        element_ul=document.getElementById(ids[i]+"_ul");
	
        if (e != null)
        {
	    if (element_ul != null)
	    {
		element_ul.style.display='block';
	    }

	    if (element_switch != null)
	    {
		if (element_switch.innerHTML=="▷")
		{
		    element_switch.innerHTML="▽";
		}
	    }
	    else
	    {
		element_item=document.getElementById(ids[i]+"_item");
		if (element_item != null)
		{
		    if (element_item.innerHTML=="○")
		    {
			element_item.innerHTML="●";
		    }
		}
	    }
        }
    }
}
