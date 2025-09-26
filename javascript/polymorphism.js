class shape{
    draw()
    {
        return"i am generic shape";
    }
}

class square extends shape{
    draw()
    {
        return"i am square";
    }
}

class circle extends shape{
    draw()
    {
        return"i am circle";
    }
}

let s=new shape();
console.log(s.draw());

s=new square();
console.log(s.draw());

s=new circle();
console.log(s.draw());

