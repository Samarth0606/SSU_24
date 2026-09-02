// 1.forEach()

// hof => accepts cb fn => cb fn has 2 args (item,index) 
// => doesnot return anything

// let arr = [10,20,30,40,50]

// arr.forEach()
// to iterate and not return
// arr.forEach( function(item,index){
//     console.log(item, index);
// } ) //calling

// let out = arr.forEach( function(item,index){
//     return 100
// } ) //calling
// console.log(out);

// ---------------------------------------

// 2. map()
// hof => accepts cb fn => cb fn has 2 args (item,index) 
// => it returns a new array with same no of elements like original array

// let arr = [10,20,30,40,50]

// let newArr= arr.map( function(item,index){
//                 return item*item;
//             } )

// let newArr= arr.map( (item,index)=> item*item )
// console.log(arr);
// console.log(newArr);



// ---------------------------------------

// 3. filter()
// hof => accepts cb fn => cb fn has 2 args (item,index) 
// => it returns a new array with no gaurantee of elements 
// i.e It only return truthy values

// let arr = [10,20,30,40,50]

// let filteredArr = arr.filter((item,index)=>{
//     if(item%20 === 0){
//         // return false
//         return true
//         // return item
//         // return index
//     }
// })
// console.log(arr);
// console.log(filteredArr);


// ---------------------------------------

// some()
// hof => accepts cb fn => cb fn has 2 args (item,index) 
// => it returns a boolean value when anyone of the condition is true

// let arr = [10,20,30,40,50]

// let out = arr.some((item)=>{
//     console.log("agye lala");
    
//     if(item % 50 === 0){
//         return true
//     }
// })
// console.log(out);

let arr = [100,20,30,40,50]

let out = arr.some( (item)=>{
    console.log("agye lala");
    if(item % 50 === 0){
        return true
    }
} )
console.log(out);


// ---------------------------------------

// every
// hof => accepts cb fn => cb fn has 2 args (item,index) 
// => it returns a boolean value when every of the condition is true

// let arr = [15,20,30,40,50]

let out2 = arr.every((item)=>{
    console.log("agye lala");
    if(item % 10 === 0){
        return true
    }
})
console.log(out2);

