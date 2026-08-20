


// let obj = {
//     naam: "Sam",
//     umar: 13 ,
//     favRang: "blue",
//     fn: function(){
//         console.log("welcome to code baithak"); 
//     }
// }

// console.log(obj);
// console.log(obj.favRang);
// console.log(obj[favRang]); //glat
// console.log(obj["favRang"]); //sahi


// let arr = [10 , "sam" , true , false , null , undefined]
// console.log(arr);



// let arr = [ 10 , {fn: "balle balle"} ]

// console.log(arr[1].fn);
// console.log(arr[1]["fn"]);



let obj = {
    naam: "Sam",
    umar: 13 ,
    favRang: "blue",
    fn: function(){
        console.log("welcome to code baithak"); 
    }
}

for(let item in obj){
    console.log(item);
    // console.log(obj.item);
    console.log(obj[item]);
}


let arr = [10,20,30 ,"sam" , "true" , false]
for(let i of arr){
    console.log(i);
}
