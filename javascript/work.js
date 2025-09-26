

let form=document.getElementById("form")

form.addEventListener("submit",(event)=>{
    event.preventDefault();

     let data=JSON.parse(localStorage.getItem("data"))||[];

    let name=document.getElementById("text").value;
    let age=document.getElementById("textt").value;
    let course=document.getElementById("texttt").value;
    let mark=document.getElementById("textttt").value;

    let studentdata={Name:name,Age:age,course:course,mark:mark};

    data.push(studentdata);
    
    localStorage.setItem("data",JSON.stringify(data));
})


function readdata(){


    let data=JSON.parse(localStorage.getItem("data"))

    let list=document.getElementById("read")

    let html="";
    data.forEach((element ,index) => {
        html+=`<tr><td>${element.Name}</td><td>${element.Age}</td><td>${element.course}</td><td>${element.mark}</td><td><button id="edit" onclick="editt(${index})">edit</button></td><td><button id="delete" onclick="delett(${index})">delete</button></td></tr>`
    });
    list.innerHTML=html;
}

function delett(){

    let data=JSON.parse(localStorage.getItem("data"))

    data.splice(index,1)

    localStorage.setItem("data",JSON.stringify(data))

    readdata()
}