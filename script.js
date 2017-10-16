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
  var id = $.now();
  console.log (id)
  cardBody.append(
    `<article id="${id}" class="sample-card">
      <h1>${userInputWebsite}</h1>
      <a class="website-link">${userInputUrl}</a>
      <button id="read-button">Read</button>
      <button id="delete-button" onClick="removeCard(${id})">Delete</button>
    </article>`);
    console.log ("add card function", userInputWebsite + userInputUrl);
}

deleteButton.addEventListener("click", removeCard); 

function removeCard(id) {
    $('#'+id).remove()
    console.log(id)
    
}
   








