


// new Promise(()=>{})
// let p1 = new Promise(function(resolve,reject){
//             let data = "10 rupee ke turtaree"
//             let bakwaas = "10 rupee vaale basicut ka pacet kitna ka hai ji..."
//             resolve(data)
//             // reject(bakwaas)
//         })

// console.log(p1);

// ------------------------------

// new Promise()
let p1 = new Promise( (resolve , reject)=>{
    let data1 = "Champs"
    let data2 = "lil champs"
    resolve(data1)
    // reject(data2)
} )

p1
.then((dataaaa)=>{
    console.log(dataaaa);
})
.catch((errr)=>{
    console.log(errr);
})
.finally(()=>{
    console.log("Mai to chal dia yuhi");
})



