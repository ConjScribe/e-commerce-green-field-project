
angular.module('myapp')
.controller('myadd', function($scope){

$scope.AddItem=function(){
  // get input value of name item from add item model
var Aname=$('#Aname').val();
  // get input value of price item from add item model
var Aprice=$('#Aprice').val();
  // get input value of description item from add item model
var Adisc=$('#Adisc').val();
  // get input value of image item from add item model
var Aimage=$('#Aimage').val();
// send the values to the server
if(Aname.length<4 || Aprice.length<4  || Aimage.length<4 ){
  alert('please fill out text')
}else{
$.ajax({
  type:'post',
  url:'/add',
  data:JSON.stringify({
    name:Aname,
    price:Aprice,
    description:Adisc,
    image:Aimage
  })
})
  alert('successfully added '+Aname)

    }
  }
})
