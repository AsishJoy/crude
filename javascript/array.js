let a=[2,4,6,8,10];
a.push(12);
console.log(a);



let b=[1,2,3,4,5,6];
b.pop()
console.log(b);



let c=[9,8,7,6,5,4];
c.unshift(10)
console.log(c);



let d=[9,8,7,6,5,4];
d.shift()
console.log(d);



let e=[2,4,6,8,10,12,14,16,18,20];
e.splice(3,2)
console.log(e);



let f=[2,4,6,8,10,12,14,16,18,20];
f.splice(4)
console.log(f);



let g=[2,4,6,8,10,12,14,16,18,20];
g.splice(3,2,50,60)
console.log(g);


let h=[2,4,6,8,10,12,14,16,18,20];
h.splice(3,0,40,70)
console.log(h);


let i=[1,2,3,6,4,5];
let j=i.slice(2,5)
console.log(j);


let k=[1,2,3];
let l=[4,6,8];
let m=k.concat(l)
console.log(m);



let n=[1,2,3,4,5,6,7,8,9];
let out=n.includes(10)
console.log(out);



let o=[1,2,3,4,5,6,7,8,9,10];
let p=o.indexOf(6);
console.log(p);



let q=[1,2,3,4,5,6,7,8,9,10];
let str=q.join('+');
console.log(str);



let r=[1,2,3,4,5,6,7,8,9,10];
let rev=r.reverse();
console.log(rev);

let x=[1,5,3,43,15,63,7,78,9,10];
 let sorted=x.sort((a,b)=>a-b);
 console.log(sorted);






