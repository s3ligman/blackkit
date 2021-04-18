var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );

  }
  cube.classList.add( showClass );
  currentClass = showClass

}



// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );


var front = document.getElementById("front");
var back = document.getElementById("back");
var left = document.getElementById("left");
var right = document.getElementById("right");
var active = document.querySelector('.active');


function activateFront() {
  front.classList.toggle( "active" );
  back.classList.remove( "active" );
  left.classList.remove( "active" );
  right.classList.remove( "active" );


}

function activateBack() {
  back.classList.toggle( "active" );
  front.classList.remove( "active" );
  left.classList.remove( "active" );
  right.classList.remove( "active" );


}

function activateRight() {

  right.classList.toggle( "active" );
  front.classList.remove( "active" );
  left.classList.remove( "active" );
  back.classList.remove( "active" );


}

function activateLeft() {
  left.classList.toggle( "active" );
  front.classList.remove( "active" );
  right.classList.remove( "active" );
  back.classList.remove( "active" );


}
