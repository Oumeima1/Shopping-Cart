   var k1 = 0;
   var k2=0
   var k3=0
   function qtrFunction(x,i) {
   
         if(i===1)
{
           if(k1<0)
       return {}
       if(x=="I")
       {
         k1=k1+1;
       }
       else if((k1>=1)&&(x=="D"))
       {
         k1=k1-1;
       }
       var k=k1
    }
    else if(i===2)
    {
        if(k2<0)
        return {}
        if(x=="I")
        {
          k2=k2+1;
        }
        else if((k2>=1)&&(x=="D"))
        {
          k2=k2-1;
        }
        var k=k2
    }
    else 
    {
        if(k3<0)
        return {}
        if(x=="I")
        {
          k3=k3+1;
        }
        else if((k3>=1)&&(x=="D"))
        {
          k3=k3-1;
        }
        var k=k3
    }
       document.getElementById('qt'+i).innerHTML = k;
    //    console.log(k);
   }
// //    computed:{
// //     total() {
// //       return this.cart.reduce(function (sum, item) {
// //         return sum + item.TOTAL
// //       }, 0)
// //     }
// //   }
// //   <!-- after your v-for in the line with the sum: ->
// //   <td>{{total}}</td>
//   $('.minus-btn').on('click', function(e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());
 
//     if (value &amp;gt; 1) {
//         value = value - 1;
//     } else {
//         value = 0;
//     }
 
//   $input.val(value);
 
// });
 
// $('.plus-btn').on('click', function(e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());
 
//     if (value &amp;lt; 100) {
//         value = value + 1;
//     } else {
//         value =100;
//     }
 
//     $input.val(value);
// });
// $(document).ready(function(){
// 	$(".checkout").on("keyup", ".quantity", function(){
// 		var price = +$(".price").data("price");
// 		var quantity = +$(this).val();
// 		$("#total").text("$" + price * quantity);
// 	})
// })
function price(i){
   
  let a= Number(document.getElementById("qt"+i).textContent)
  let b=Number(document.getElementById("price"+i).textContent)
  let price=a*b;

 document.getElementById('total'+i).innerHTML =price;
}
function totalprice(){
  let totalprice=0
    let a=Number(document.getElementById("total1").textContent);
    let b=Number(document.getElementById("total2").textContent);
    let c=Number(document.getElementById("total3").textContent);
    totalprice=a+b+c;
    document.getElementById('total').innerHTML =totalprice;
}

  