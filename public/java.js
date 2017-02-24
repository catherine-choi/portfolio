

var $firstrow = $('.firstrow').isotope({
  itemSelector: '.work',
  layoutMode: 'fitRows',
});

// bind filter button click
$('#filter').on( 'click', 'a', function() {
  console.log('eiqghw');
  console.log( $(this).attr('data-filter') );
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
   $firstrow.isotope({ filter: filterValue });

});

// bind filter button click
$('#filter2').on( 'click', 'a', function() {
  console.log('eiqghw');
  console.log( $(this).attr('data-filter') );
  // if( $(this).attr('data-filter') == '.about'){
  // }
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
   $firstrow.isotope({ filter: filterValue });

});
