
 var maCd = [
    { Name: "New meatless Burger",
      price: "@ 179 Only/-",
      image_url:"https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    { Name: "Crispy Veg Burger",
      price: "@ 119 Only/-",
      image_url:"https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    { Name: "Uk Veg Burger",
    price: "@ 149 Only/-",
    image_url:"https://images.pexels.com/photos/9842225/pexels-photo-9842225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
  { Name: "delicious-burger",
  price: "@ 99 Only/-",
  image_url:"https://images.pexels.com/photos/6488939/pexels-photo-6488939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
 ]
  var product=JSON.parse(localStorage.getItem("product"))
  maCd.map(function(elem){

  var outer=document.createElement("div")
  outer.setAttribute("class","outerdiv")

   var product1=document.createElement("div")
   product1.setAttribute("class","productdiv")
   
   var img=document.createElement("img")
   img.setAttribute("id","img")
   img.src=elem.image_url

   var name=document.createElement("p")
      name.innerText=elem.Name
      name.setAttribute("id","name")

      var price=document.createElement("p")
      price.innerText=elem.price
      price.setAttribute("class","price")   

      var btn=document.createElement("button")
      btn.innerText="Order"
      btn.addEventListener("click",function(){
        orderFood(elem)
      })
      
      var checkout=document.createElement("div")
      
      checkout.setAttribute("class","checkout") 

      

   product1.append(img,name,price,btn)

   document.querySelector("#container").append(product1)

     
   document.querySelector("#container1").append(checkout)


})
//    var name=document.createElement("p")
//    name.innerText=elem.Name
//    name.setAttribute("class","namediv")

//    var price=document.createElement("p")
//    price.innerText=elem.Name
//    price.setAttribute("class","price")

//   product.append(img,name,price)

//   var btn=document.createElement("span")
//   btn.innerText="Order";
//   btn.setAttribute("class","order")
//   btn.addEventListener("click",function(){
//   product(elem)
// });
// function product(elem){
//   console.log(elem);
//   maCd.push(elem)
//   localStorage.setItem("product",JSON.stringify(product))
// }


function orderFood(){
    
let order= document.getElementById("name").innerText
let x = document.getElementById("img").src;
// let price= document.getElementsByClassName("price").innerText

let status="open";

let mypromise=new Promise (function(resolve,reject){
   
    let time= Math.random()*5 *1000
  
    setTimeout(function(){
    if(status==="open"){
    resolve(order,x);
    }
   else{
       reject();
   }
   },time);
  
});
   
   mypromise.then(function(res){
                
                
                
                checkout.innerText=(`${res} is ready`);
                 
                 
                checkout.style.backgroundColor="green"
                checkout.style.color="white" 
                checkout.style.padding="15px"
                checkout.style.height="40px" 
                

   });
}

// function orderFood1(){
    
//     let order= document.getElementById("name2").innerText
    
//     let status="open";
    
    
    
//     let mypromise=new Promise (function(resolve,reject){
       
//         let time= Math.random()*10 *1000
      
//         setTimeout(function(){
//         if(status==="open"){
//         resolve(order);
//         }
//        else{
//            reject();
//        }
//        },time);
//     });
       
//        mypromise.then(function(res){
//         var x = document.getElementById("img2").src;
//         document.getElementById("displayimg").innerHTML = x;

//         checkout.innerText=(`${res} is ready`);
//         checkout.style.backgroundColor="green"
//         checkout.style.color="white" 
//                 checkout.style.padding="15px" 
//        });
//     }

//     function orderFood2(){
    
//         let order= document.getElementById("name3").innerText
        
//         let status="open";
        
        
        
//         let mypromise=new Promise (function(resolve,reject){
           
//             let time= Math.random()*10 *1000
          
//             setTimeout(function(){
//             if(status==="open"){
//             resolve(order);
//             }
//            else{
//                reject();
//            }
//            },time);
//         });
           
//            mypromise.then(function(res){
              
//               checkout.innerText=(`${res} is ready`);
//                 checkout.style.backgroundColor="green"
//                 checkout.style.color="white" 
//                 checkout.style.padding="15px" 
//            });
//         }

//         function orderFood3(){
    
//             let order= document.getElementById("name4").innerText
            
//             let status="open";
            
            
            
//             let mypromise=new Promise (function(resolve,reject){
               
//                 let time= Math.random()*10 *1000
              
//                 setTimeout(function(){
//                 if(status==="open"){
//                 resolve(order);
//                 }
//                else{
//                    reject();
//                }
//                },time);
//             });
               
//                mypromise.then(function(res){
                
//                 checkout.innerText=(`${res} is ready`);
//                 checkout.style.backgroundColor="green"
//                 checkout.style.color="white" 
//                 checkout.style.padding="15px"            

//             });
//             
