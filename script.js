// setTimeout(()=>{
//     console.log("hello")
// },2000);

function hello(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            resolve("good")
        },100);
    }
    )
}
function hello1(d){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            resolve(d+"good1")
        },200);
    }
    )
}
function hello2(d1){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            resolve(d1+"good2")
        },300);
    }
    )
}
hello().then((d)=>{
   console.log(d)
   return hello1(d);
}).then((d1)=>{
    console.log(d1)
    return hello2(d1);
}).then((d2)=>{
    console.log(d2);
})