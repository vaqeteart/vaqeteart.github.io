$(document).ready(function () {
    var navitm_over = 0;
    $('.navbar th.navitm').mouseenter(function () {
        ++navitm_over;
        //alert('hello!');

        if (1 == navitm_over) 
        {
            var ul_tree = 0;
            $('.second', this).fadeIn("slow");
            $('#full_categories_tree ul').hide();
            $('ul.categories_tree li.categories_tree_item').mouseenter(function () {
                ++ul_tree;             
                if (1 == ul_tree)
                {
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
});