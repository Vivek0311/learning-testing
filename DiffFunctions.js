const shoe = {
    color : "Black"
}

// Traditional Functions
function print (shoe){
    console.log(shoe.color);
}

print (shoe);

//Another way 
const show = function (shoe){
    console.log(shoe.color);
}

show(shoe);

//Arrow fuctions

const display = (shoe) => console.log(shoe.color);

display(shoe)