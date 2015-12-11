/**/
$(function(){
    $('.navbar th').hover(function(){
	$('.second',this).fadeIn("slow");//top is up to down, bottom is down to up.
	$('.categories_item_tree').mouseenter(function(){
	    $('ul',this).slideDown("slow");
	    if ($('span.tree_switch', this).html() == "▷")
	    {
		$('span.tree_switch', this).html("▽");
	    }
	});
	$('.categories_item_tree').mouseleave(function(){
	    $('ul',this).slideUp("slow");
	    if ($('span.tree_switch', this).html() == "▽")
	    {
		$('span.tree_switch', this).html("▷");
	    }
	});
      },function(){
	  $('.second',this).fadeOut("slow");	  
      });
})


function create_category_menu(category, level, countmap)
{
    //alert("hello");
    var line = "";
    if(category.children == null)
    {
        if (level > 0)
        {
            /*<li id="xxx" class="categories_item_tree">*/
            line += "<li id='" + category.id  + "' class='categories_item_tree'>";

            /*<a href="/categories/xxx" >*/
            line += "<a href='" + category.path + "'>";

	    /*<span id="categories_note_item" class="tree_item">○</span>*/
            line += "<span id='" + category.id + "_item' class='tree_item'>○</span>";

            /*<span id="categories_note_title">记事</span>*/
	    line += "<span id='" + category.id +"_title' >" + category.title + "</span>";

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

            /*<a href="/categories/xxx" >*/ 
            line += "<a href='" + category.path + "'>";

            /*<span id="categories_note_title">记事</span>*/
	    line += "<span id='" + category.id +"_title' >" + category.title + "</span>";

            /*<span id="categories_note_count">({{site.categories.note|size}})</span>*/
            line += "<span id='" + category.id + "_count'>(" 
            + (typeof(countmap[category.path]) == "undefined"?
                0:countmap[category.path]) 
            + ")</span>";
            /*<span id="categories_note_switch" class="tree_switch" onclick="switch_fold('categories_note')">▷</span>*/
            line += "<span id='" + category.id 
            + "_switch' class='tree_switch'"
            + category.id + "')\">▷</span>";

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
            create_category_menu(category.children[key], level+1, countmap);
        }
        /*</ul>*/
        line += "</ul>";
        /*</li>*/
        line += "</li>";
        document.write(line);
        line = "";
    }
}
