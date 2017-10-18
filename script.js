var userInputWebsite = document.querySelector("#website-title");
var userInputUrl = document.querySelector("#website-url");
var enterButton = document.querySelector(".enter-button");
var cardBody = $(".card-body");
var deleteButton = document.querySelector("#delete-button");
var cardCountValue = document.querySelector('.card-count');
var readCardCountValue = document.querySelector('.read-card-count');
var unreadCardCountValue = document.querySelector('.unread-card-count');
var cardCounter = 0;
var readCounter = 0;

userInputUrl.addEventListener("keyup", enterButtonEnabled);
userInputWebsite.addEventListener("keyup", enterButtonEnabled);
enterButton.addEventListener("click", inputValidation);

function inputValidation() {
  var userUrl = userInputUrl.value;
  var userWeb = userInputWebsite.value;
  
  if(userUrl===('') && userWeb!==('')) {
    alert('Errror! Please fill in both website title and URL.')    
  }
  else if(userUrl!==('') && userWeb===('')) {
    alert('Errror! Please fill in both website title and URL.')    
  }
  else {
    addCard();  
  }
}

  $('.card-body').on('click', '.read-button', toggleRead);
  $('.card-body').on('click', '.deleteButton', removeCard);  

function enterButtonEnabled() {
  if (enterButton.disabled =true) {
    enterButton.removeAttribute("disabled", false);
  } 
}

function addCard() {
  var id = $.now();
  $(`<article id="${id}" class="sample-card">
      <h1>${userInputWebsite.value}</h1>
      <a class="website-link">${userInputUrl.value}</a>
      <button id="${id}" class="read-button">Read</button>
      <button id="delete-button" onClick="removeCard(${id})">Delete</button>
    </article>`).appendTo(".card-body");
  cardCounter ++;
  readCardCounter();
}

function removeCard(id) {
  $('#'+id).remove();
  cardCounter --;
  readCardCounter();
}

function toggleRead(id) { 
  $(this).closest('article').toggleClass('sample-card-read');
  $(this).toggleClass('read-click');
  readCounter = $('.read-click').length;
  readCardCounter();
}

function readCardCounter() {
  var unreadCounter = cardCounter - readCounter;
  cardCountValue.innerText = cardCounter;
  readCardCountValue.innerText = readCounter;
  unreadCardCountValue.innerText = unreadCounter;
}

function cardInputReset() {
  $('userInputUrl').val('');
  $('userInputWebsite').val('');
  $('userInputWebsite').focus();
  enterButton.disabled = true;
}