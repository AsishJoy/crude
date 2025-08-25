

function save(){
    let data=JSON.parse(localStorage.getItem("text"))||[];
    // let parseddata=JSON.parse(data)
    let value=document.getElementById("text").value;
    data.push(value);
    localStorage.setItem("text",JSON.stringify(data));

    show();
}

function show()
{
    
    let data=JSON.parse(localStorage.getItem("text"));
    
    let list=document.getElementById("list");

    let html=""

    data.forEach((element,index) => {
        
        html+=`<li>${element}</li> <button id="edit" onclick="edited(${index})">edit</button><button id="delete" onclick="deleted(${index})">delete</button>`

       });

       list.innerHTML=html;

}

function deleted(index)

{
     let data=JSON.parse(localStorage.getItem("text"));

     data.splice(index,1);

     localStorage.setItem("text",JSON.stringify(data));

     show();
} 


function edited(index)

{
    let data=JSON.parse(localStorage.getItem("text"));

    let values=prompt("edit value",data[index]);

    data[index]=values;

    localStorage.setItem("text",JSON.stringify(data));

    // console.log(values);

    show();






}