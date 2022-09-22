const BREEEDS_URL = 'https://dog.ceo/api/breeds/image/random';

function addDoggo () {
    // show loading spin 
    fetch(BREEEDS_URL)
        .then(function(response) {
            return response.json(); 
        })
        .then(function (data) {
            const img = document.createElement('img'); 
            img.src = data.message;
            img.alt = 'dog'; 
    
            document.querySelector('.doggos').appendChild(img);
            //stop loading spin 
        })

}

document.querySelector('.add-doggo').addEventListener("click", addDoggo);