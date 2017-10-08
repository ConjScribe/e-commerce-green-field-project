angular.module('myapp',[])
.controller('myctrl',function($scope){
// make default result to hide element
$scope.isloggedin=true;
// list item in cart ---
$scope.addtocard=function (index) {
  $.ajax({
    async:false,
    type:'put',
    url:'/addToCart',
    data:JSON.stringify({
      cart:$scope.data[index]
    })
  // $scope.userdata.push($scope.data[index])
  })
}
  $.ajax({
  async:false,
  type:'get',
  url:'/data',
  success:function (cart) {
    $scope.userdata=cart;
  }
});
// logout fuction when logout clicked
$scope.logout=function(){
    $.ajax({
      async:false,
      type:'post',
      url:'/logout',
      data:JSON.stringify({
        logout:'logout'
      })
//get result if user logged out to make sure and to hide logut elemnt , additem and show my cart list
    })
    $.ajax({
      async:false,
      type:'get',
      url:'/result',
      success:function (result) {
        if(result=='false'){
          $scope.isloggedin=false;
        }else{
          $scope.isloggedin=true;
        }
      }
    })
  };

// login fuction when login clicked
$scope.Login=function(){
// get value of username and password input
var Luser=$('#Luser').val();
var Lpass=$('#Lpass').val();
// send username and password value
  $.ajax({
    async:false,
    type:'post',
    url:'/login',
    data:JSON.stringify({
      username:Luser,
      password:Lpass
    })
// get result to know if user registered already
  })
  $.ajax({
    async:false,
    type:'get',
    url:'/result',
    success:function (result) {
      if(result=='false'){
        $scope.isloggedin=false;
        alert('Weclome '+Luser)
      }else{
        $scope.isloggedin=true;
      alert('Wrong username or password!!!')
      }
    }
  })

  $.ajax({
    async:false,
    type:'get',
    url:'/data',
    success:function (result) {
        $scope.userdata=result;

      }
    })
};
// get data (items) from server(database)
$.ajax({
  async:false,
  type:'get',
  url:'/data',
  success:function (data) {
    $scope.data=data;
  }
});
// login fuction when SignUp clicked
$scope.SignUp=function(){
// get value of username and password input
var Suser=$('#Suser').val();
var Spass=$('#Spass').val();
if(Suser.length<3 || Spass.length<3){
  alert('please sure username or password At least 3 characters');
}else{
// send username and password value
  $.ajax({
    async:false,
    type:'POST',
    url:'/signup',
    data:JSON.stringify({
      username:Suser,
      password:Spass
  })
// get result to know if username already exists
    })
  $.ajax({
    async:false,
    type:'get',
    url:'/result',
      success:function (result) {
        if(result=='false'){
          $scope.isloggedin=false;

          alert('this username is already exists')
        }else{
          $scope.isloggedin=true;
          alert('successfully registered welcome '+Suser)
        }
      }
    })
      $.ajax({
  async:false,
  type:'get',
  url:'/cart',
  success:function (cart) {
    $scope.userdata=cart;
  }
});
  };
///////////////////////////////////////////
  }
})

.component('navbar',{
          controller:'myctrl',
          templateUrl:'component/templates/navbar1.html'
})
