
var oarray=[121,323,224,125,435];
for(let n of oarray)
{

let rev=0;
var nn=n;
while(n>0)
{
    let s=n%10;
    n=Math.floor(n/10);
    rev=rev*10+s;
}
// console.log(rev)
if(rev==nn)
{
    console.log(nn+"  palindrome")
}
else{
    console.log(nn+"  not palindrome")
}
}


