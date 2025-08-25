const button=document.getElementById("btn");

button.addEventListener("click",()=>{
    const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;

    localStorage.setItem("name",name);
    localStorage.setItem("age",age);
})