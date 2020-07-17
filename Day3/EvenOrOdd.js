let num = prompt("Enter the number");

console.log(num,typeof num);//prompt box return type is string

num=parseInt(num);

console.log(num,typeof num);//now string is coverted into number

if((num%2)==0){
console.log(`The Number Entered is ${num} and the Number is Even`);
}
else
console.log(`The Number Entered is ${num} and the Number is Odd`);
