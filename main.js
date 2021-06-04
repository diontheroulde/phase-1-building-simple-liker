// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡"
const FULL_HEART = "♥"

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  const simpleLikes = document.querySelectorAll(".like-glyph")
  simpleLikes.forEach(simpleLike => {
    simpleLike.addEventListener("click", function () {
      mimicServerCall()
        .then()
        .catch(error => {
          console.log(error)
          alert("Uh-Oh!")
          const objectError = document.querySelector("#modal")
          objectError.classList.remove("hidden")
          setTimeout(() => {
            objectError.classList = "hidden"
          }, 3000)
        })
      if (simpleLike.innerText === EMPTY_HEART) {
        simpleLike.innerText = FULL_HEART
        simpleLike.className = "activated-heart"
      } else {
        simpleLike.innerText = EMPTY_HEART
        simpleLike.className = ""
      }
    })
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
