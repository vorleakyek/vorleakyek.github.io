const BREEEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breeds');
const img = document.querySelector("img");
const loading = document.querySelector('h3');

fetch(BREEEDS_URL) 
    .then(response => {
        return response.json();
    })
    .then(data => {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);
      
       for (let i = 0; i < breedsArray.length; i++) {
           const option = document.createElement('option');
           option.value = breedsArray[i];
           option.innerText = breedsArray[i];
           select.appendChild(option);
       }
    })

        select.addEventListener("change", function(event){
      
           //make url
           let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`; 

           //show the spinning
           img.classList.add("hide");
           loading.classList.add("spin");
           loading.classList.remove("hide");
           

           //fetch from the API 
           fetch(url) 
            .then(response => {
                return response.json();
                
            })
            .then(data => {
                img.src=data.message; 
                img.classList.remove("hide");
                loading.classList.add("hide");
            })  
       })
      
    