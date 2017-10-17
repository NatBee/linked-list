var userInputWebsite = document.querySelector("#website-title");
var userInputUrl = document.querySelector("#website-url");
var enterButton = document.querySelector(".enter-button");
var deleteButton = document.querySelector("#delete-button");
var cardBody = $(".card-body");

userInputUrl.addEventListener("keyup", enterButtonEnabled);
userInputWebsite.addEventListener("keyup", enterButtonEnabled);
enterButton.addEventListener("click", addCard);
 


function enterButtonEnabled() {
  if (enterButton.disabled =true) {
    enterButton.removeAttribute("disabled", false);
  }
}

function addCard() {
  var id = $.now();
  console.log (id);
    $(`<article id="${id}" class="sample-card">
      <h1>${userInputWebsite.value}</h1>
      <a class="website-link">${userInputUrl.value}</a>
      <button id="${id}" class="read-button">Read</button>
      <button id="delete-button" onClick="removeCard(${id})">Delete</button>
    </article>`).appendTo(".card-body");
    console.log ("add card function", userInputWebsite + userInputUrl);
}

deleteButton.addEventListener("click", removeCard); 

function removeCard(id) {
    $('#'+id).remove()
    }

function addRemoveRead(id) {
  $('#'+id).hover()
$('read-button').hover(
       function(){ $(this).addClass('hover') },
       function(){ $(this).removeClass('hover') },
)}

// $("read-button").click(function() {
//   $(this).toggleClass(".clicked")
// })

// readButton.addEventListener("click", addReadClass);

// function addReadClass(id) {
//   $('#'+id);
// $("read-button").click(function() {
//   $(this).toggleClass(".clicked:focus");
// });
// }

// $('#'+id).on('click', function () {
//   $(this).toggleClass('clicked');
// });


// function addReadClass(id) {
//   $('#'+id).prop
// }

// function toggleColor() {
//   $("read-button").classlist(#F05A28);
// }
   








