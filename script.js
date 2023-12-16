

const ratings = document.querySelectorAll('.rating');
const sendButton = document.querySelector('#send');
const panel = document.querySelector('#panel');
const ratingsContainer = document.querySelector('.container-rating');
let selectedRating =  '';


ratingsContainer.addEventListener('click', (event) => {

    // Choose define smileface
    if(event.target.parentNode.classList.contains('rating')){

        removeActive();
        event.target.parentNode.classList.add('active')
        selectedRating = event.target.nextElementSibling.innerHTML;
    }

    console.log(selectedRating);
});

// Remove class 'active' of elements in rating array
function removeActive(){
    ratings.forEach((ratingElement) => {
        ratingElement.classList.remove('active')
    })
}

// Submit button
sendButton.addEventListener('click', () => {

    panel.innerHTML = `<i class="fas fa-heart"></i>
                        <strong>Thank you</strong>
                        <br />
                        <strong>Feedback: ${selectedRating}</strong>
    `;
});
