// let productdata=" ";
let cardcontain=document.getElementById("container")

let selected=document.getElementById("filter")

// async function showDetails()
// {
//     let response=await fetch("https://dummyjson.com/products")
//     let datas=await response.json()
//     productdata=datas;
    
//     datas.products.forEach((element,index)=>{  

//         cardcontain.innerHTML+=`<div class="card">
//                                        <h3>${element.title}</h3>
//                                        <p>${element.description}</p>
//                                        <p>${element.category}</p>
//                                        <p>price : ${element.price}</p>
//                                    </div>`
//     });
// }

let data="";
let dataxhr= new XMLHttpRequest();
dataxhr.open ("GET", "https://dummyjson.com/products" ,true);
dataxhr.onload=function(){
                         data=JSON. parse(dataxhr. responseText)
                        let products=data. products;
                        let cat=[];
                        products. forEach ( (element, index) => {
                        cardcontain.innerHTML+= `<div class="card">
                                                 <h3>${element.title}</h3>
                                                 <p>${element.description}</p>
                                                 <p>category : ${element.category}</p>
                                                 <p>price : ${element.price}</p>
                                                 </div>`

                        if(!cat.includes(element.category))
                        {
                            cat.push(element.category)
                        }
                        });
                        cat.forEach((elem)=>{
                            selected.innerHTML+=`<option>${elem}</option>`
                        })
}
dataxhr. send (); 






let searchbar=document.getElementById("search")

searchbar.addEventListener("input",()=>{

    let searchedvalue=searchbar.value.toLowerCase();
     cardcontain.innerHTML=""
    data.products.filter((elements)=>{
        return elements.title.toLowerCase().includes(searchedvalue)
    }).map((elementt)=>{
        cardcontain.innerHTML+=`<div class="card">
                                       <h3>${elementt.title}</h3>
                                       <p>${elementt.description}</p>
                                       <p>category : ${elementt.category}</p>
                                       <p>price : ${elementt.price}</p>
                                   </div>`
        
    })
})


// showDetails();



selected.addEventListener("change",()=>{
    cardcontain.innerHTML="";
    let selectedvalue=selected.value;
    let newvalue=data.products.filter((elements)=>{
        return elements.category===selectedvalue
    })
    newvalue.map((element)=>{
        cardcontain.innerHTML+=`<div class="card">
                                       <h3>${element.title}</h3>
                                       <p>${element.description}</p>
                                       <p>category : ${element.category}</p>
                                       <p>price : ${element.price}</p>
                                   </div>`

    })
})