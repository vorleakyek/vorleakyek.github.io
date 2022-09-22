const BREEEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breeds');
const img = document.querySelector("img");

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




       select.addEventListener("change", function(event){
         //  console.log(`https://dog.ceo/api/breed/${event.target.value}/images/random`)
          
           //make url
           let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`; 

           /*
           // show loading spinner
            const loading = document.createElement('h2');
            loading.innerHTML = '🐕'; 
            loading.classList.add("spin");
            document.body.appendChild(loading);
            */
            const loading = document.querySelector('h3');
            loading.classList.add("spin");
            loading.classList.remove("load");

           //fetch from the API 
           fetch(url) 
            .then(response => {
                return response.json();
                
            })
            .then(data => {
               // const image = document.createElement("img"); 
                img.src=data.message; 
               // console.log(data, image.src)
               // image.alt="picture"
               // document.body.appendChild(image);
                loading.classList.add("load");
            })

           //use the URL to change the current image


           //stop showing loading spinner 
           //loading.classList.add("load");
           image.classList.add("load");
          
       })
      
    })