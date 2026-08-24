

// function Sam(){
//     this.gender = "Male";
//     this.favColor = "Blue";
//     this.bye = function(){
//         console.log("swadikhaa");
//     }
// }
// let ekVariable = new Sam();
// console.log(ekVariable.gender);
// console.log(ekVariable.favColor);
// console.log(ekVariable.bye);

// ekVariable.bye()

// ----------------------


// class Sam2{
//     constructor(gender , color){ 
//         //properties
//         this.gender = gender;
//         this.favColor = color;
//     }
//     // methods
//     bye(){
//       console.log("swadikhaa");
//     }
// }

// let x = new Sam2("male" , "blue")
// let y = new Sam2("male" , "brown")
// let z = new Sam2("female" , "white")
// console.log(x);
// x.bye()
// console.log(y);
// console.log(z);

// let ekVariable = new Sam2();
// console.log(ekVariable.gender);
// console.log(ekVariable.favColor);
// console.log(ekVariable.bye);

// ekVariable.bye()

// ----------------------

class Student{
    constructor(naam , age , rollNo){
        this.naam = naam;
        this.age = age;
        this.rollNo = rollNo;
    }
    greet(){
        console.log("good morning");
    }
}

class Child extends Student{
    constructor(username,userage,userRoll,userColor ){
        super(username,userage ,userRoll)
        this.favColor = userColor
    }
    greet(){console.log("thanks bye tata")}
    bye(){console.log("byebye")}
}

let s1 = new Student("sam"  , 99 , 420)
let c1 = new Child("mav"  , 4 , 10 , "brown")
s1.greet() //parent
c1.greet() //child
c1.bye()