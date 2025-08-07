const obj={a:10,b:28,c:48,d:34};

let com=0;
for(let key in obj)
{
    if(obj[key]>com)
    {
        com=obj[key];
    }    
}
console.log(com + " is the highest numeric value")