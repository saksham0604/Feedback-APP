let form=document.querySelector("form");
let select=document.querySelector("select");
let textarea=document.querySelector("textarea");
let ul=document.querySelector("ul");

const saveFeedback=(e) => {
    e.preventDefault();
    let li =document.createElement("li");
    let h1 =document.createElement("h1");
    let h2 =document.createElement("h2");
    let delBtn =document.createElement("button");

    li.className="list-group-item rounded-0 shadow-sm";
    h1.className="display-3";
    h2.className="display-4";
    delBtn.className="btn btn-sm btn-danger rounded-0 float-end";

    h1.innerText = "rating : " + select.value;
    h2.innerText = " review : " + textarea.value;
    delBtn.innerText = "delete";
     

    li.appendChild(h1);
    li.appendChild(h2);
    li.appendChild(delBtn);
    
    ul.appendChild(li);

    form.reset();
};

form.addEventListener("submit",saveFeedback);
const deleteTodo =(e) => {
    if (e.target.className.includes("btn-danger")){
        let li = e.target.parentElement;
        if (window.confirm("are you sure?")){
          ul.removeChild(li);  
        }
    }
};

ul.addEventListener("click",deleteTodo);

let clearBtn =document.querySelector("#clearBtn");
 
clearBtn.addEventListener("click",() => {
    let allListItems= document.querySelectorAll("li");
     allListItems.forEach((item) => {
        ul.removeChild(item);
     });
});