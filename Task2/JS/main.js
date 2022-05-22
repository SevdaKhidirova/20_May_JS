"use strict"

let addToFavs=document.querySelectorAll("#product .product-item .bi-heart-fill");

for (const item of addToFavs) {
    item.addEventListener("click" ,()=>{
        if(localStorage.getItem("favourites") === null){
            localStorage.setItem("favourites","[]")
        }
        let favourites =JSON.parse(localStorage.getItem("favourites"));

        let productElement=item.parentNode;     

        let existingProduct=favourites.find( prod=>{
          return prod.id==productElement.getAttribute("data-id");
        })

        if(existingProduct){
            existingProduct.count++;
        } else {
            let product = {
                id: productElement.getAttribute("data-id"),
                image: productElement.querySelector("img").getAttribute("src"),
                name: productElement.querySelector("h5.card-title").innerText,
                desc: productElement.querySelector("p.card-text").innerText,
                price: productElement.querySelector("p.price").innerText,
                count: 1
            }
            favourites.push(product)
            alert("Product added")
        }
        localStorage.setItem("favourites", JSON.stringify(favourites));

    })
  
}