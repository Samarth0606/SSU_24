// STEP1 - SELECTING IMAGE 4S

// function step1( fn ){
//     console.log("please wait selecting image");
//     setTimeout(()=>{
//         fn( "SELECTED IMAGE" );
//     } , 4000)
// }
// function step2(image , fn){
//     console.log(`please wait applying filter to ${image}`);
//     setTimeout(()=>{
//         fn("Filtered Image")
//     } , 2000)
// }
// function step3(filter , fn){
//     console.log(`please wait adding caption to ${filter}`);
//     setTimeout(()=>{
//         fn("Captioned Image")
//     } , 5000)
// }
// function step4(caption){
//     console.log(`please wait uploading ${caption}`);
//     setTimeout(()=>{
//         console.log("Finally uploaded");
//     } , 3000)
    
// }
// step1( function( image ){
//     console.log(image);
//     step2(image , function(filter){
//         console.log(filter);
//         step3(filter , function(caption){
//             console.log(caption);
//             step4(caption)
//         } )
//     } )
// } );
// STEP2 - APPLYING FILTER 2S
// STEP3 - ADDING CAPTION 5S
// STEP4 - UPLOADING POST 3S

// ------------------------------------


function step1( fn ){ //para
    console.log("please wait selecting image...");
    setTimeout( ()=>{
        fn("SELECTED IMAGE") //ARGS
    } , 4000 )
}
function step2(image , fn){ //para
    console.log(`please wait applying filter ${image} `);
    setTimeout( ()=>{
        fn("FILTERED IMAGE") //args
    } , 2000 )
    
}
function step3(filter , fn){
    console.log(`please wait adding caption to ${filter}`);
    setTimeout(()=>{
        fn("CAPTIONED IMAGE") //args
    } , 5000)
}
function step4(caption){
    console.log(`please wait uploading ${caption}`);
    setTimeout(()=>{
        console.log("FINALLY IMAGE POSTED");
    } , 3000)
}
// CALLBACK HELL OR pyramid of DOOM
step1( function(image){
    console.log(image);
    step2(image , function(filter){
        console.log(filter);
        step3(filter , function(caption){
            console.log(caption);
            step4(caption) //args
        }) //args
    } ); //args
} ); 





