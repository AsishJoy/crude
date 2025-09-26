let form=document.getElementById("form")

form.addEventListener("submit",(event)=>{
    event.preventDefault();

     let data=JSON.parse(localStorage.getItem("data"))||[];

    let title=document.getElementById("title").value;
    let description=document.getElementById("description").value;
    let date=document.getElementById("due").value;
    let status="pending";
    

    let details={title:title,description:description,duedate:date,status:status};

    data.push(details);
    
    localStorage.setItem("data",JSON.stringify(data));

    view();

})



function view(){

    let data=JSON.parse(localStorage.getItem("data"));

    let table=document.getElementById("table");

    let html="";
    data.forEach((element, index ) => {
        html+=`<tr><td> ${element.title}</td><td>${element.description}</td><td>${element.duedate}</td><td>${element.status}</td><td><button id="edit" onclick="edits(${index})">edit</button></td><td><button id="delete" onclick="deletes(${index})">delete</button></td><tr>`;
    });
    table.innerHTML=html;

}



function deletes(index)
{
    let data=JSON.parse(localStorage.getItem("data"));

    data.splice(index,1);

    localStorage.setItem("data",JSON.stringify(data));

    view();
}








function edits(index)
{
    let data=JSON.parse(localStorage.getItem("data"));
    
    const details = data[index];

        
    
        document.getElementById("title").value=details.title;
        document.getElementById("description").value=details.description;
        document.getElementById("due").value=details.duedate;



        document.getElementById("add").style.display="none"
        document.getElementById("edit").style.display="block"
        // const newstatus=prompt{"enter status :",data.status}
        

        //  if (newtitle !== null && newdate !== null && newdes !== null && newstatus !== null) 
        //     {
        //     data[index] = {
        //         title:newtitle,
        //         description:newdes,
        //         duedate:newdate,
        //         status:newstatus
        //     }
        // }

    // localStorage.setItem("data",JSON.stringify(data));
    
    view();
}

function edit()
{
      let data=JSON.parse(localStorage.getItem("data"));
    
      const details = data[index];

        if (newtitle !== null && newdate !== null && newdes !== null && newstatus !== null) 
            {
            data[index] = {
                title:newtitle,
                description:newdes,
                duedate:newdate,
                status:newstatus
            }
        }
     
}        



