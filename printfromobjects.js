let student = {
    Ashok : 90,
    Shridevi : 74,
    Raghu : 86
}

function print(student){
    for(a in student){
        console.log(student[a]);
    }
}

print(student);