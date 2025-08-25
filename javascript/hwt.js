const button=document.getElementById("btn1");
button.addEventListener("click",()=>{
    const ivalue=document.getElementById("num").value;
    
        for(let i=1;i<=ivalue;i++)
        {
            const btn=document.getElementById("btn2");
            btn.innerHTML+=`<button id=abc${i}></button>`;
            
            document.getElementById(`abc${i}`).textContent=i;
            
        }
        
})

