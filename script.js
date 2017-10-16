var userInputWebsite = document.querySelector("#website-title");
var userInputUrl = document.querySelector("#website-url");
var enterButton = document.querySelector(".enter-button");
var cardBody = $(".card-body");


enterButton.addEventListener('click', addCard); 
 
 function addCard() {
  userInputWebsite = userInputWebsite.value;
  userInputUrl = userInputUrl.value;
  cardBody.prepend("<h1> userInputWebsite </h1>" + "<a> userInputUrl </a>");
  console.log ("add card function" + userInputWebsite + userInputUrl);
}
    






