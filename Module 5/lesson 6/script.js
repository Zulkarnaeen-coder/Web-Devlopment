function clearScreen(){
    document.getElementById("result").value = "";
}
function setScreenValue(value){
    document.getElementById("result").value +=value;
}
function calculateResult(){
    const resultElement = document.getElementById("result").value;
    const expression = resultElement.value
    if (expression === ""){
        document.getElementById("result").innerHTML ="Please enter an expression!";
        return;
    }
    try{
        resultElement.value = eval(expression);
        
    }
    catch(err){
        resultElement.value ="Invalid Expression"
       
    }
        
}
