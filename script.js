const sno = document.getElementById("sno-box");
const itemname = document.getElementById("itemname-box");
const price = document.getElementById("price-box");
const Quantity = document.getElementById("Quantity-box");
const units = document.getElementById("units-box");
const categories = document.getElementById("categories-box");
const Bestlocation = document.getElementById("Bestlocation-box");

const listcontainer = document.getElementById("list-container");

function addTask(){
    if(sno.value == '' || isNaN(sno))
    {
        alert("You must type integer!");
    }
     
     
    else{
        //creating tr
        let tr = document.createElement("tr");



        //sno
        let li = document.createElement("th");
        li.innerHTML=sno.value;
        tr.appendChild(li);
        // let span = document.createElement("span");
        // span.innerHTML="\u00d7";
        // li.appendChild(span);

        //item name
        li = document.createElement("th");
        li.innerHTML=itemname.value;
        tr.appendChild(li);

        //price
        li = document.createElement("th");
        li.innerHTML=price.value;
        tr.appendChild(li);

        //Quantity
        li = document.createElement("th");
        li.innerHTML=Quantity.value;
        tr.appendChild(li);

        //units
        li = document.createElement("th");
        li.innerHTML=units.value;
        tr.appendChild(li);

        //categories
        li = document.createElement("th");
        li.innerHTML=categories.value;
        tr.appendChild(li);

        // best location
        li = document.createElement("th");
        li.innerHTML=Bestlocation.value;
        tr.appendChild(li);
        listcontainer.appendChild(tr);
    }
    sno.value = "";
    saveData();
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName == "LI")
    {
      e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},  false);
function saveData()
{
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask()
{
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();
