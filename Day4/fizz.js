for(let i=0;i<=100;i++){
    if(i%3==0){
        console.log(`Multiples of Three is${i} and fizz`);
    }
    if(i%5==0){
        console.log(`Multiples of five is${i} and buzz`);
    }
    if(i%3==0 && i%5==0){
        console.log(`Multiples of three and five is${i} and fizzbuzz`);

    }
    
}