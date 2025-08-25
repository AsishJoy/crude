let formcontainer=document.getElementById("formcontainer")

formcontainer.addEventListener("submit",(event)=>{
    event.preventDefault();

    let name=document.getElementById("name").value;

    let email=document.getElementById("email").value;

    let age=document.getElementById("age").value;

    let gender=document.querySelector(`input[name="gender"]:checked`).value;

    let state=document.getElementById("state").value;

    alert(`form submitted ! \n name is ${name} \n email is ${email} \n age is ${age} \n gender is ${gender} \n state is ${state} `)
    
})