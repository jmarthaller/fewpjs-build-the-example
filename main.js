// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


// const heartBtn = document.querySelector('.like-glyph')
const likes = document.querySelectorAll('li')
const modal = document.querySelector('#modal')
const articles = document.querySelector('#article-container')



articles.addEventListener('click', function(e) {

  const heartSpan = e.target.closest('span')
  mimicServerCall()
    .then(function(serverMessage) {
      alert("You notified the server")
      alert(serverMessage)
      if (heartSpan.textContent === EMPTY_HEART) {
        heartSpan.textContent = FULL_HEART
        heartSpan.classList.add('activated-heart')
      } else {
        heartSpan.textContent = EMPTY_HEART
        heartSpan.classList.remove('activated-heart')
      }
    }) 
    .catch(function(error) {
      modal.classList.toggle('hidden')
      setTimeout(function() {
        modal.remove()
      }, 5000)
    })

})










//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}