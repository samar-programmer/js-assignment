function mul()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divide() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 / num2;
}

function add() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 + num2;
}

function sub() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 - num2;
}

function sqt() 
{ 
        num = document.getElementById("firstNumber").value;
        document.getElementById("result").innerHTML = Math.sqrt(num);
}

function per() 
{ 
        percent= document.getElementById("firstNumber").value;
        value = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = (percent/100)*value;
}