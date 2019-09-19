/*$(document).ready(function () {
    $('.navbar th').mouseenter(function () {
        $('.second', this).fadeIn("slow");//top is up to down, bottom is down to up.
        $('.categories_tree_item').mouseenter(function () {
            $('ul', this).slideDown("slow");
            if ($('span.tree_switch', this).html() == "▷") {
                $('span.tree_switch', this).html("▽");
            }

        });
        $('.categories_tree_item').delay(800).mouseleave(function () {
            $('ul', this).slideUp("slow");
            if ($('span.tree_switch', this).html() == "▽") {
                $('span.tree_switch', this).html("▷");
            }
        });
    });

    $('.navbar th').mouseleave(function () {
        $('.second', this).delay(1000).fadeOut("slow");
    });
});
*/
  /*
function switch_fold(id) {
  //var display=e.getAttribute("data-id");
  e = document.getElementById(id);
  element_switch = e.getElementById(id + "_switch");
  element_ul = document.getElementById(id + "_ul");
  //ee = e.parent;
  if (element_ul.style.display == "block") {
      element_ul.style.display = 'none';
      element_switch.innerHTML = "▷";
  }
  else if (element_ul.style.display == "none") {
      element_ul.style.display = 'block';
      element_switch.innerHTML = "▽";
  }
  else {
      alert("unknown for list item.");
  }
}
$(document).ready1(function(){
  $('.navbar th').click(function () {
      $('.second', this).fadeIn("slow");//top is up to down, bottom is down to up.
      $('.categories_item_tree').mouseenter(function () {
          $('ul', this).slideDown("slow");
          if ($('span.tree_switch', this).html() == "▷") {
              $('span.tree_switch', this).html("▽");
          }
      });
      $('.categories_item_tree').delay(800).mouseleave(function () {
          $('ul', this).slideUp("slow");
          if ($('span.tree_switch', this).html() == "▽") {
              $('span.tree_switch', this).html("▷");
          }
      });
  }, function () {
      $('.second', this).delay(1200).fadeOut("slow");
  });
});


$(function () {
  $('.navbar th').hover(function () {
      $('.second', this).fadeIn("slow");//top is up to down, bottom is down to up.
      $('.categories_item_tree').mouseenter(function () {
          $('ul', this).slideDown("slow");
          if ($('span.tree_switch', this).html() == "▷") {
              $('span.tree_switch', this).html("▽");
          }
      });
      $('.categories_item_tree').delay(800).mouseleave(function () {
          $('ul', this).slideUp("slow");
          if ($('span.tree_switch', this).html() == "▽") {
              $('span.tree_switch', this).html("▷");
          }
      });
  }, function () {
      $('.second', this).delay(1200).fadeOut("slow");
  });
})


function change_category(id) {
  //id.replace(/\//g, "_");
  //alert(id);
  e = document.getElementById(id);
  element_switch = document.getElementById(id + "_switch");
  element_ul = document.getElementById(id + "_ul");
  if (e != null) {
      element_ul.style.display = 'block';
      //element_switch.getElementsByTagName("img")[0].src="/assets/icons/blacks/16x16/br_down.png";
      element_switch.innerHTML = "▽";
  }
  //home_state = "category"
}

function change_categories(cats) {
  cats = cats.split("_");
  var ids = new Array(cats.length);

  for (i = 0; i < cats.length; ++i) {
      var path = new Array(i + 1);

      for (j = 0; j < path.length; ++j) {
          path[j] = cats[j];
      }

      ids[i] = path.join("_");
  }

  for (i = 0; i < ids.length; ++i) {
      e = document.getElementById(ids[i]);
      element_switch = document.getElementById(ids[i] + "_switch");
      element_ul = document.getElementById(ids[i] + "_ul");

      if (e != null) {
          if (element_ul != null) {
              element_ul.style.display = 'block';
          }

          if (element_switch != null) {
              if (element_switch.innerHTML == "▷") {
                  element_switch.innerHTML = "▽";
              }
          }
          else {
              element_item = document.getElementById(ids[i] + "_item");
              if (element_item != null) {
                  if (element_item.innerHTML == "○") {
                      element_item.innerHTML = "●";
                  }
              }
          }
      }
  }
}
*/