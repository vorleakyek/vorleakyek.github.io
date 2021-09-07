const prevButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
const galleryImgs = document.querySelectorAll(".gallery-image"); 
let currentlySelected = 0; 


prevButton.addEventListener('click', function() {
    
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected --;
    galleryImgs[currentlySelected].classList.add("active");
    nextButton.disabled = false;
    if (currentlySelected === 0){
        prevButton.disabled=true;
    }

});

//classList can easily let us remove any classes from an element 
nextButton.addEventListener('click', function(){
    galleryImgs[currentlySelected].classList.remove("active"); // class name with no dot
   
    currentlySelected++;
    galleryImgs[currentlySelected].classList.add("active");
   
    prevButton.disabled = false;

if (currentlySelected === galleryImgs.length-1) {
   nextButton.disabled = true;
     
}
}); 

