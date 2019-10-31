/*
window.onselectstart=function()   {return   false;}       //禁用选择
window.oncopy=function()   {return   false;}       //禁止复制
*/

//禁止查看源代码
function stop() {
    return false;
}
document.oncontextmenu = stop;

//获取传递给html页面的参数
function getQuery(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    //if (r!=null) return unescape(r[2]); return null;
    if (r != null) return decodeURI(r[2]); return null;
}

//  <body onload="loadContent('<%= page.title %>');">
function loadContent(title) {
    if ("about" != title) {
        //var category_info = getCategoriesInfo();
        //var td = document.getElementById("td_posts");
        //        var textNode = document.createTextNode(JSON.stringify(category_info.categories));
        //var textNode = document.createTextNode('<%= page.title %>');
        //        td.appendChild(textNode);
        //document.body.appendChild(textNode);
        //alert("hello1");
        ;
    }
}

$(document).ready(function () {
    var navitm_over = 0;
    $('.navbar th.navitm').mouseenter(function () {
        ++navitm_over;
        //alert('hello!');

        if (1 == navitm_over) {
            var ul_tree = 0;
            $('.second', this).fadeIn("slow");
            $('#full_categories_tree ul').hide();
            $('ul.categories_tree li.categories_tree_item').mouseenter(function () {
                ++ul_tree;
                if (1 == ul_tree) {
                    //alert($('a:hover', this).html());
                    if ($('span.tree_switch:first', this).html() == "▷") {
                        $('span.tree_switch:first', this).html("▽");
                        $('ul:first', this).slideDown("slow");
                    }
                }
            });

            $('ul.categories_tree li.categories_tree_item').delay(1000).mouseleave(function () {
                ul_tree = 0;
                /*
                if ($('span.tree_switch:first', this).html() == "▽") {
                    $('ul:first', this).delay(300).slideUp("slow");
                    $('span.tree_switch:first', this).html("▷");
                }
                */
            });
        }
    });

    $('.navbar th.navitm').mouseleave(function () {
        navitm_over = 0;

        if ($('span.tree_switch', this).html() == "▽") {
            $('span.tree_switch', this).html("▷");
        }

        $('.second', this).delay(2000).fadeOut("slow");
    });

    if ("about" == document.title) {
        /*var index=0;
        var word=document.getElementById("w").innerHTML;
        setInterval(type(word,index), 200);*/
    }
});