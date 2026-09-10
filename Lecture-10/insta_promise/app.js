

// image
function step1(){
    return new Promise( ( resolve , reject )=>{
        console.log("Please wait selecting image...");
        setTimeout( ()=>{
            resolve('SELECTED IMAGE')
        } , 4000 )
    } )
}

function step2(image){
    return new Promise( (resolve, reject)=>{
        console.log(`Please wait applying filter to ${image}...`);
        setTimeout( ()=>{
            resolve('FILTERED IMAGE')
        } , 2000 )
    } )
}
function step3(filter){
    return new Promise( (resolve, reject)=>{
        console.log(`Please wait adding caption to ${filter}...`);
        setTimeout( ()=>{
            resolve('CAPTIONED IMAGE')
        } , 5000 )
    } )
}
function step4(caption){
    return new Promise( (resolve, reject)=>{
        console.log(`Please wait uploading ${caption}...`);
        setTimeout( ()=>{
            resolve('IMAGE UPLOADED')
        } , 3000 )
    } )
}

let p1 = step1()
p1
.then( (image)=>{
    console.log(image)
    return step2(image)
} )
.then( (filter)=>{
    console.log(filter);
    return step3(filter)
} )
.then( (caption)=>{
    console.log(caption);
    return step4(caption)
} )
.then( (finalImg)=>{
    console.log(finalImg);
} )



// filter
// caption
// upload










