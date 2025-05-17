let button=document.querySelector("#add");
let task=document.querySelector("#task");

button.addEventListener("click",(el)=>{
    if (!(task.value==="")) {
        addTask(el);
    }
    
})


const addTask=(el)=>{
    let show=document.createElement("div")
    let para=document.createElement("p")
    let p =document.createElement("p");
    let button=document.createElement("div");
    
    
    p.innerHTML="del";
    para.innerHTML=task.value;
    show.append(para);

    
    show.classList.add("show");
    button.classList.add("check")
    para.classList.add("para");
    p.classList.add("delete");

    show.appendChild(button)
    show.appendChild(para);
    show.appendChild(p);


    document.querySelector(".main_div").appendChild(show);
    task.value=""
    p.addEventListener("click",(event)=>{
        event.target.parentElement.remove();
    })

}

