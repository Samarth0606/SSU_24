

// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this); //window , obj
//         let sam = ()=>{
//             console.log(this); // window , 
//         }
//         sam()
//     }

// }
// // let a = obj.fn
// // a()
// obj.fn()


let obj = {
    a:10,
    fn: ()=>{
        console.log(this);
        let vohra = ()=>{
            console.log(this);
        }
        vohra()
    }
}

let a = obj.fn;
a()

// let obj2 = {
//     a: 10,
//     sam: {
//         fn: function(){
//             console.log(this);
//         }
//     }
// }
// obj2.sam.fn()