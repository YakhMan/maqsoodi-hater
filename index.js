
let text = document.getElementById("text");
let kolesh = document.getElementById("kolesh");

let tedad_kir = localStorage.getItem("tedad_kir")
  ? parseInt(localStorage.getItem("tedad_kir"))
  : 0;

  let kirnum = 0
function funbtn(){
    
    let text = document.getElementById("text");

    tedad_kir++;
    kirnum++;
    
    text.innerHTML = "+" + kirnum + " کیر تقدیم به مقصودی "; 
    
    localStorage.setItem("tedad_kir", tedad_kir);

    kolesh.innerHTML = "کل کیر های داده شده تا الان: " + tedad_kir;
};




document.addEventListener("DOMContentLoaded", load);

function load(){

    

    let kolesh = document.getElementById("kolesh");
    kolesh.innerHTML = "کل کیر های ارسال شده توسط شما : " + tedad_kir;
}
