//substring method,start inder =0; end index=n-1;
//it does not affect the main string 
var a = "samar-upgrade";
console.log(a.substring(2,6));
//it takes the substring after the starting index
console.log(a.substring(2));
//If "start" is greater than "end", it will swap the two arguments
console.log(a.substring(4,1));
//If "start" is less than 0, it will start extraction from index position 0
console.log(a.substring(-2));
//Extract only the first character:
console.log(a.substring(0,1));
//Extract only the last character:
console.log(a.substring(a.length-1,a.length));

//splice
//The splice() method adds/removes items to/from an array, and returns the removed item(s).
//array.splice(index, howmany, item1, ....., itemX)----syntax
//it affects original array
var b=["Banana", "Orange", "Apple", "Mango"];
console.log(b.splice(2, 1, "Lemon", "Kiwi"));
console.log(b);

//replace
//replace the substring in a string
var c = "sasi samar";
console.log(c.replace("samar","kumar"));

//string.replaceAll(search, replaceWith) method replaces all appearances of search string with replaceWith.
// var d = "sasi kumar samar kumar"
// const e=d.replaceAll("kumar","sasi");
// console.log(e);

