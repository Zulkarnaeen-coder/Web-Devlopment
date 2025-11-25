function validate(event){
    event.preventDefault();
    
    const email = document.getElementById("email").value ;
    const pass = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const msb = document.getElementById("message")
    var messages = [];
    if (email === ""){
        messages ="Please enter a email"
        msb.style.color = 'red'
    } 
    else if (pass === ''){
        messages ='Password must be at 8 charecter'
        msb.style.color ='red'
    }
    else if (age === ''){
        messages = 'Age must be between 12 and 50'
        msb.style.color ='red'
    }
    else{
        messages = 'Login successfully!'
        msb.style.color = 'green'
    }
    msb.innerText = messages ;
}