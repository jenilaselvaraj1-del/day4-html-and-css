// var a = document.getElementById("hey")
// console.log(a.textContent="bye")
// var b=document.getElementsByClassName("hii")
// for(let i=0;i<b.length;i++){
    // console.log(b[i].textContent)
// }
// var clickBtn = document.getElementById("btn");
// function change(){
  //  var c = document.querySelectorAll(".hii")
  //  c.forEach(function(item) {
    //  console.log(item.textContent);
    //  item.style.color = "blue";
  //  })
// };

var c= document.getElementById("hidden");
console.log(c.innerHTML="<h1>hello everyone<h1>"); 

     
function remove(){
  var c = document.querySelectorAll(".hii")
  c.forEach(function(item){
    console.log(item.textContent);
    item.classList.remove("active");
  })

}
   
function toggle(){
  var c= document.querySelectorAll(".hii")
  c.forEach(function(item){
    console.log(item.textContent);
    item.classList.toggle("toggle");
  })
}


