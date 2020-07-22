let abc=prompt("Enter your name","");
console.log('welcome'+' '+abc);
// window.onload = function(){
//     document.getElementById('name').inneHTML='welcome'+abc;
// }

//const ctime = document.getElementById('time');    
window.onload=function(){
function clock(){
    
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById('time').innerHTML = time;
}

// clock();

setInterval(clock,1000);}

function DarkMode(){    
    document.body.style.backgroundColor='black';
}