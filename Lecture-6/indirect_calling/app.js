
let obj1 = {
    a: 10,
    fn: function(x,y){
        console.log(this.a ,x,y); //obj1.a
    }
}
obj1.fn(30,40) // 10

let obj2 = {
    a: 50
}
// obj2.fn() // expected 50

obj1.fn.call(obj2,400,500) //new value of this
obj1.fn.apply(obj2, [400,500]) //new value of this
let newFn = obj1.fn.bind(obj2, 6000,7000) //new value of this
newFn()