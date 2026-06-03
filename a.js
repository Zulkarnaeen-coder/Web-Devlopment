const btn = document.getElementById("b")

btn.addEventListener("mouseover" ,()  =>  {
    var x = Math.random()*(window.innerWidth - btn.offsetWidth);
    var y = Math.random()*(window.innerHeight - btn.offsetHeight);

    btn.style.left = x+"px";
    btn.style.top = y +"px";
})