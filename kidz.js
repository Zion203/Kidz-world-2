
var change=document.getElementById("change")
var sum=0
var cart=document.getElementById("inline")
var cart_items=[]
var cart_i={}
var rate1=0
var rate2=1
function kart(name,rate){
    
    cart_items.push(name)
    sum+=1
    change.textContent=sum  
    rate1+=rate
    rate2=rate1.toFixed(2)
}    

cart.onclick=()=>{
    cart_i={}
    for (let i=0;i<cart_items.length;i++){
        if (cart_i.hasOwnProperty(cart_items[i])){
            cart_i[cart_items[i]]+=1
        }else{
            cart_i[cart_items[i]]=1
        }

    }
//     for (var productName in cart_i) {
//         var quantity = cart_i[productName];
//         console.log(`Item name :${productName} - Quantity ${quantity}`)
//       }
//       var rate_list=String(rate2).split(".")
// console.log(`the total amount is $${rate_list[0]} and ${rate_list[1]} cents `)
    updateWhatsApp()
}

var apiLink = "https://api.whatsapp.com/send?phone=919000000000&text=Order%20details:"

function updateWhatsApp(){
    // let cart_i={}
    for (var productName in cart_i) {
        let proNames=''
        var quantity = cart_i[productName];
        for (let j=0;j<productName.length;j++){
            if (productName[j]==" "){
                proNames+="%20"
            }else{
                proNames+=productName[j]
            }
        }
        apiLink+=('Item%20name%20:'+proNames+`%20-%20Quantity%20:${quantity}`)
      }
      var rate_list=String(rate2).split(".")
      apiLink+=(`the%20total%20amount%20is%20$${rate_list[0]}%20and%20${rate_list[1]}%20cents`)
      window.location.href=apiLink

}
