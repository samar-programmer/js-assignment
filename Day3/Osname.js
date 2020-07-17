let name=prompt("Enter the os name nad version");
let name_array=name.split(" ");
console.log(`The OS name is ${name_array[0]} and version is ${name_array[1]}`);

//Show in html page 
let htmpage = `The OS name is ${name_array[0]} and version is ${name_array[1]}`;
console.log(htmpage);
window.onunload= function()   {document.getElementById("root").innerHtml=htmpage;}
