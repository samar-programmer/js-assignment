
function printTable(){
    console.log('inside the function');
    var num;
    num=Number(document.getElementById('txtNumber').value);
    for(var i=1; i<=10; i++){
        var pTag= document.getElementById('pPrint');
        pTag.innerHTML +=`${i}*${num}=`+(num*i) + "<br/>" 
    }
}