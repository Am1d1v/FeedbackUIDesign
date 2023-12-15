

const ratings = document.querySelectorAll('.rating');
const sendButton = document.querySelector('#send');
const panel = document.querySelector('#panel');


panel.addEventListener('click', (event) => {
    
    console.log(ratings);

    // Submit only for button
    if(event.target === sendButton){
        console.log('ok');
    }

    // Choose define smileface
    if(event.target.parentNode.classList.contains('rating')){
        removeActive(event.target.parentNode);
        event.target.parentNode.classList.add('active')
    }
});

// Remove class 'active' of elements in rating array
function removeActive(){
    ratings.forEach((ratingElement) => {
        ratingElement.classList.remove('active')
    })
}