"use strict"


let deleteAllTasks=document.querySelector(".delete-tasks");
let addBtn=document.querySelector(".addbtn");
let inputTask=document.querySelector(".input");
let taskArea=document.querySelector(".list-group");
let ulArea=document.querySelector(".list-group");

if(localStorage.getItem("Tasks")===null){
    localStorage.setItem("Tasks","[]");
    let li ="<li class='list-group-item items'> No Items </li>";
    ulArea.innerHTML += li;
    deleteAllTasks.classList.add("d-none");

}
else{
    deleteAllTasks.classList.remove("d-none");
}



var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' '+time;

document.addEventListener("click",function(e){
    if(e.target.hasAttribute("class") && e.target.getAttribute("class").includes("bi-trash3")){
        e.target.parentNode.remove()
    }
    if(document.querySelector(".bi-trash3")==undefined){
        // deleteAllTasks.classList.add("d-none");
    }
})

if(document.querySelector(".bi-trash3")===undefined ){
    deleteAllTasks.classList.add("d-none");
}

//keyCode---> key=='Eneter'
document.addEventListener("keyup",function(e){
    if(e.keyCode==13){
        Add();
    }
})

function Add(){
    if(inputTask.value.length>0 && inputTask.value.trim()!==""){
        dateTime=""+dateTime;
        let taskelement={
           data:inputTask.value,
           date:dateTime
        }
        inputTask.value="";
        let Tasks=JSON.parse(localStorage.getItem("Tasks"));
        Tasks.push(taskelement);
        localStorage.setItem("Tasks",JSON.stringify(Tasks))
         
        let selectLi=document.querySelectorAll(".items");
        for(let i=0;i<selectLi.length;i++){
            selectLi[i].remove();
        }
        let TaskAdd=JSON.parse(localStorage.getItem("Tasks"));
        for (const tasks of TaskAdd) {
        let newTaskElement="<li class='list-group-item items'><i class='bi bi-trash3'></i> "+tasks.data+" <span class='date'>"+tasks.date+" </span></li>";
        taskArea.innerHTML+=newTaskElement;
         }
        deleteAllTasks.classList.remove("d-none");
        
    }
    else{
        alert("Invalid");
        inputTask.value="";
    }
    //   deleteAllTasks.classList.add("d-none");
}

addBtn.addEventListener("click",function(){
    Add();
})

let TaskAdd=JSON.parse(localStorage.getItem("Tasks"));
for (const tasks of TaskAdd) {
let newTaskElement="<li class='list-group-item items'><i class='bi bi-trash3'></i> "+tasks.data+" <span class='date'>"+tasks.date+" </span></li>";
taskArea.innerHTML+=newTaskElement;

}

deleteAllTasks.addEventListener("click",function(){
    if(window.confirm("Do you want to delete all Tasks?")){
        localStorage.removeItem("Tasks");
        location.reload();

    }
    else{
        alert("OK Be careful")
    }

})

//---------------------------------------------------------
// function Add(){
//     if(inputTask.value.length>0 && inputTask.value.trim()!==""){
//         let Tasks=localStorage.getItem("Tasks");
//         Tasks.push(inputTask.value);
//         localStorage.setItem("Tasks",Tasks)
        

//         localStorage.setItem("a",inputTask.value)
//         let newTaskElement="<li class='list-group-item items'><i class='bi bi-trash3'></i> "+inputTask.value+" <span class='date'>"+dateTime+" </span></li>";
//         taskArea.innerHTML+=newTaskElement;
//         inputTask.value="";
//     }
//     else{
//         alert("Invalid");
//         inputTask.value="";
//     }
// }

        // let newTaskElement="<li class='list-group-item items'><i class='bi bi-trash3'></i> "+inputTask.value+" <span class='date'>"+dateTime+" </span></li>";
        // taskArea.innerHTML+=newTaskElement;
        // inputTask.value="";