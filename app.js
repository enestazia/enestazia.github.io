document.addEventListener("DOMContentLoaded", () => {

   const image = document.querySelectorAll("img");

   for(const image of image){
       fetch("https://dog.ceo/api/breeds/image/random")
       .then(response => response.json())
       .then(data => {
            image.src = data.message
            image.width = 100;
            image.height = 100;
        })  
    }

})