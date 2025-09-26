let form=document.getElementById("form")

form.addEventListener("submit",(event)=>{
    event.preventDefault();

     let data=JSON.parse(localStorage.getItem("data"))||[];

   
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let dept=document.getElementById("department").value;
    let salary=document.getElementById("salary").value;

    let staffdata={Name:name,Age:age,Dept:dept,Salary:salary};

    data.push(staffdata);
    
    localStorage.setItem("data",JSON.stringify(data));

    view();

})


function view(){

    let data=JSON.parse(localStorage.getItem("data"));

    let table=document.getElementById("table");

    let html="";
    data.forEach((element, index ) => {
        html+=`<tr><td>${element.Name}</td><td>${element.Age}</td><td>${element.Dept}</td><td>${element.S0o'
            
            
            alary}</td><td><button id="edit" onclick="edits(${index})">edit</button></td><td><button id="delete" onclick="deletes(${index})">delete</button></td><tr>`;
    });
    table.innerHTML=html;
}