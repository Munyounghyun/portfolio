//상단메뉴바 고정
$( document ).ready( function() {
    var headerOffset = $('.header').offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > headerOffset.top ) {
        $( '.header' ).addClass( 'header_Fixed' );
      }
      else {
        $( '.header' ).removeClass( 'header_Fixed' );
      }
    });
  } );