var userInputWebsite = document.querySelector("#website-title");
var userInputUrl = document.querySelector("#website-url");
var enterButton = document.querySelector(".enter-button");
var cardBody = $(".card-body");
var deleteButton = document.querySelector("#delete-button");


userInputUrl.addEventListener("keyup", enterButtonEnabled);
userInputWebsite.addEventListener("keyup", enterButtonEnabled);
enterButton.addEventListener("click", addCard);
$('.card-body').on('click', '.read-button', toggleRead);
$('.card-body').on('click', '.deleteButton', removeCard);  
 

function addCard() {
  var id = $.now();
  console.log (id);
    $(`<article id="${id}" class="sample-card">
      <h1>${userInputWebsite.value}</h1>
      <a class="website-link">${userInputUrl.value}</a>
      <button id="${id}" class="read-button ">Read</button>
      <button id="delete-button" onClick="removeCard(${id})">Delete</button>
    </article>`).appendTo(".card-body");

    console.log ("add card function", userInputWebsite + userInputUrl);
}

function removeCard(id) {
    $('#'+id).remove()
    }

function toggleRead() { 
$(this).closest('article').toggleClass('sample-card-read') 
console.log ('.sample-card')

}

function cardInputReset() {
  $('userInputUrl').val('');
  $('userInputWebsite').val('');
  $('userInputWebsite').focus();
  enterButton.disabled = true;
}


   








