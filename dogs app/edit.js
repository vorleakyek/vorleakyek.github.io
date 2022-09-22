const select = document.querySelector('.breeds');
const img = document.querySelector("img");
const loading = document.querySelector('h3');


async function display() {
    // populate breed list 
    const response = await fetch("https://dog.ceo/api/breeds/list/all"); 

    const responseJson = await response.json(); 

    let breedsObject = responseJson.message;
    let breedsArray = Object.keys(breedsObject);
  
   for (let i = 0; i < breedsArray.length; i++) {
       const option = document.createElement('option');
       option.value = breedsArray[i];
       option.innerText = breedsArray[i];
       select.appendChild(option);
   }



   select.addEventListener("change", changeImage);
   img.addEventListener("load", function(){
    loading.classList.add("hide");
   })
  

   
}

async function changeImage(event){
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`; 
    
    //show the spinning
    img.classList.add("hide");
    loading.classList.add("spin");
    loading.classList.remove("hide");

    const response = await fetch(url);
    const responseJson = await response.json();

    img.src=responseJson.message; 
    img.classList.remove("hide");
   
    
}

display();

// fetch(BREEEDS_URL) 
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         const breedsObject = data.message;
//         const breedsArray = Object.keys(breedsObject);
      
//        for (let i = 0; i < breedsArray.length; i++) {
//            const option = document.createElement('option');
//            option.value = breedsArray[i];
//            option.innerText = breedsArray[i];
//            select.appendChild(option);
//        }
//     })

        // select.addEventListener("change", function(event){
      
        //    //make url
        //    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`; 

        //    //show the spinning
        //    loading.classList.add("spin");
        //    loading.classList.remove("hide");
          

           //fetch from the API 
        //    fetch(url) 
        //     .then(response => {
        //         return response.json();
                
        //     })
        //     .then(data => {
        //         img.src=data.message; 
        //         loading.classList.add("hide");
        //     })  
            
    //    })
      
    