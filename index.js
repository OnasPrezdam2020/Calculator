function myFunction() {
    var firstNumber = document.getElementById("inputone").value;
    parseInt(firstNumber.value);
    
    try { 
    if(isNaN(firstNumber)) throw "not a number";
  	}
  	catch(err) {
    	alert("Input is " + err + ". Pls insert a number.");
  	}

    var secondNumber = document.getElementById("input2").value;
    parseInt(secondNumber.value);
    
    try { 
    if(isNaN(secondNumber)) throw "not a number";
  	}
  	catch(err) {
    	alert("Input is " + err + ". Pls insert a number.");
  	}

    var ans = (firstNumber * secondNumber);

    document.getElementById("result").value = ans;
}

