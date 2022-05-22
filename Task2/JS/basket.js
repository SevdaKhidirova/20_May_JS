"use strict"

let tbody=document.querySelector("table tbody");
let removeSelected=document.querySelector(".remove-selected");
let deleteAll=document.querySelector(".remove-all");

if(localStorage.getItem("favourites")===null || JSON.parse(localStorage.getItem("favourites").length ===0)){
    let tr = "<tr><td colspan='5' class='text-center text-danger fw-bold'>No items</td></tr>"
    deleteAll.classList.add("d-none")
    tbody.innerHTML += tr;
}
else{
    let favourites =JSON.parse(localStorage.getItem("favourites"));
    let total=0;

    for (const product of favourites) {
        let tr= `
        <tr>
            <td><img src='${product.image}'></td>
            <td>${product.name}</td>
            <td>${product.desc}</td>
            <td><i class="bi bi-trash3" data-id=${product.id}></i></td>
            <td class='price'>${product.price} * ${product.count}</td>
        </tr>
        `
        tbody.innerHTML+=tr;
        let amount=product.price.replace("$","");
        amount=parseInt(amount);
        total +=amount*product.count;
    }
    let subtotalTr = `
    <tr>
        <td colspan='4' class='text-end'>Subtotal:</td>
        <td class='price'>$${total}</td>
    </tr>
    `
    tbody.innerHTML += subtotalTr;
}

deleteAll.addEventListener("click", function () {
    localStorage.removeItem("favourites");
    location.reload();
})

document.addEventListener("click",(e)=>{
    if (e.target.hasAttribute("class") && e.target.getAttribute("class").includes("bi-trash3")) {
        
        let deletedId=e.target.getAttribute("data-id")

        
        let favourites =JSON.parse(localStorage.getItem("favourites"));
         let index;
        for(let i=0;i<favourites.length;i++){
            if(deletedId==favourites[i].id){
                index=i;
                 break;
            }
        }
        // console.log(index)
        // console.log(deletedId)
        favourites=favourites.splice(index,1);
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }


    if(document.querySelector(".bi-trash3")==undefined){
        deleteAll.classList.add("d-none");
    }
})