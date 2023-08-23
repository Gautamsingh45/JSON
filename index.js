arr=[
    {
        id:123,
        name: "ROHIT",
        address: "mp nagar",
        phone: 9661259888
    }
    , {
        id:124,
        name: "SONU",
        address: "Banaras",
        phone: 1234567890
    }
    , {
        id:125,
        name: "AMIT",
        address: "Vanarasi",
        phone: 9876543210
    }
]
function demo1(){
    var a1 = document.gtm.text.value;
    // document.write(a1);
   
          for(i=0;i<arr.length;i++){
            if(a1==arr[i].id  || a1==arr[i].name||a1==arr[i].address||a1==arr[i].phone ){
                
            document.getElementById('demo').innerHTML= " 1. ID-: "+arr[i].id +"<br>  2. NAME-:  "+arr[i].name+"<br> 3. ADDRESS-:"+ arr[i].address+"<br>4.  PHONE -: "+arr[i].phone;
           
    
        }
        if(a1==arr[i].id  || a1==arr[i].name||a1==arr[i].address||a1==arr[i].phone){
            document.getElementById('demo1').innerHTML=arr[i].name;
           
        }
        
       
    }    
}

// timeline

// const temp = new Promise(function(resolve,reject){
//     a=1;
//     if(a==1){
//         resolve("banaras");
//         // document.getElementById(data1).innerHTML= "firs";
//     }
//     else if(a==2){
//         resolve("mathura");
//         // document.getElementById(data1).innerHTML= "second stage";
//     }
//     else if(a==3){
//         resolve("bhopal");
//         // document.getElementById(data1).innerHTML= "solve";
//     }
//     else{
//         reject("reject");
//     }
// })
// temp.then((data)=>{
//     // document.write(data);
//      document.getElementById('data1').innerHTML= data;
    
// })
function Banaras(){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
    const tracking = "Banaras";
    console.log("here is the cheese", tracking);
    resolve(tracking);
    },2000);
    });
   }
   function Mathura(tracking){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
    const tracking1 =tracking+ "=>Mathura";
    console.log("here is the cheese", tracking1);
    resolve(tracking1);
    },3000);
    });
   }
   function Bhopal(tracking1){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
    const tracking2 = tracking1+ " => Bhopal";
    console.log("here is the cheese", tracking2);
    resolve(tracking2);
    },5000);
    });
   }
   Banaras().then((tracking)=>{
    console.log("location tracking",tracking);
    document.getElementById('data1').innerHTML= tracking;
    return Mathura(tracking);
    })
    .then((tracking1)=>{
    console.log("location tracking", tracking1);
    document.getElementById('data2').innerHTML= tracking1;
    return Bhopal(tracking1);
    }).then((tracking2)=>{
    console.log("location tracking",tracking2);
    document.getElementById('data3').innerHTML= tracking2;
   });
   


