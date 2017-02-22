
var $firstrow = $('.firstrow').isotope({
  itemSelector: '.work',
  layoutMode: 'fitRows',
});

// bind filter button click
$('#filter').on( 'click', 'a', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
   $firstrow.isotope({ filter: filterValue });

});



var $firstrow = $('.firstrow').isotope({
  itemSelector: '.work',
  layoutMode: 'fitRows',
});

// bind filter button click
$('#filter2').on( 'click', 'a', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
   $firstrow.isotope({ filter: filterValue });

});
