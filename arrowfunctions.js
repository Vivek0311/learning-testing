//Normal function 

function playgame(a){
    let c = a**2;
    c = c / 2;
    return c;
}

console.log(playgame(3));

z = function(a) {
    let c = a**2;
    c = c / 2;
    return c;
};

console.log(z(2));

//Arrow function
add = (a, b) => a+b;

console.log(add(2,3));