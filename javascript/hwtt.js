const button=document.getElementById("btn1");
button.addEventListener("click",()=>{
    const ivalue=document.getElementById("num").value;
    
        for(let i=1;i<=ivalue;i++)
        {
          
            const btn=document.getElementById("btn2");
            btn.innerHTML+=`<input type=number placeholder=input${i} id=abc${i}></input>`;
            
            btn.innerHTML+=`<button onclick=alert(abc${i}.value)>press<button`;
            btn.innerHTML+=`<br>`;
            
        }
        
})