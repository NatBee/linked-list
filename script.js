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
  // while
  userInputWebsite = userInputWebsite.value;
  userInputUrl = userInputUrl.value;
  cardBody.prepend('<section class="card-body"><article class="sample-card"><h1>' + userInputWebsite + '</h1><a>' + userInputUrl + '</a><button id="read-button">Read</button>' + '<button id="delete-button>Delete</button></article></section>');
  console.log ("add card function", userInputWebsite + userInputUrl);
}

function removeCard (){
  deleteButton.addEventListener("click", function(){
    addcard.remove
  });
}
   








