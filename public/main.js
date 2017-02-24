$(document).ready(function(){



  function openPage(title){
    $("body").removeClass();
    $("body").addClass(title);
    $("body").addClass('hidden');

    $.ajax({
      context: $("#template"),
      dataType: "html",
      url: title + "/" + title + ".html",
      success: function(results){
        $("#template").html(results);
      //  $("#template").addClass('transitiony');

      },
      complete: function(){
        if(title === "mmmm" ||
           title === "canalwalk" ||
           title === "chanchan" ||
           title === "tnc" ||
           title === "everybodytalks" ||
           title === "yellow" ||
           title === "shed" ||
           title === "imperfect" ||
           title === "righttime" ||
           title === "summer" ||
           title === "icecream" ||
           title === "memory" ||
           title === "seizethedate" ||
           title === "strawberry"){
          // Basic FitVids Test
          $(".video").fitVids();
          // Custom selector and No-Double-Wrapping Prevention Test
          $(".video").fitVids({ customSelector: "iframe[src^='http://socialcam.com']"});
        }
        else if (title === ""){

        }


      }
    });
  }

  function openAbout(){
    $("body").removeClass();
    $("body").addClass('about');

    $.ajax({
      context: $("#template"),
      dataType: "html",
      url: "about/about.html",
      success: function(results){
        $("#template").html("").show();
        $("#template").html(results);
      },

    });
  }

  $(".work").click(function(){

    var title = $(this).attr('myname');
    openPage(title);
    $("#template").html("").show();

  });

  $("#filter li").click(function(){
    $("body").removeClass();
    $("#template").html("").hide();
  });

  $("#filter2 li").click(function(){
    $("body").removeClass();
    $("#template").html("").hide();
  });



  $(".menu_container").click(function(){
      $(".menu").addClass('trans');
  });


  $(".menu_container2").click(function(){
    $(".menu").removeClass('trans');
      $(".menu").addClass('trans_r');
  });



  // isotope
  var $firstrow = $('.firstrow').isotope({
    itemSelector: '.work',
    layoutMode: 'fitRows',
  });

  // bind filter button click
  $('#filter').on( 'click', 'a', function() {
    if( $(this).attr('data-filter') == '.about'){

      openAbout();
    }
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
     $firstrow.isotope({ filter: filterValue });

  });

  // bind filter button click
  $('#filter2').on( 'click', 'a', function() {

    if( $(this).attr('data-filter') == '.about'){
      openAbout();
    }
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
     $firstrow.isotope({ filter: filterValue });
  });



});
