var num=parseInt(prompt('Enter the value for array)'));
console.log(typeof num);

let arr=[];
for(let i=0;i<num;i++){
    arr[i]=i;
}

console.log(arr);
let odd = arr.filter(el=>el%2!==0);
console.log(odd);

let cubes = odd.map(el=>el**3);
console.log(cubes);