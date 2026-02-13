let num = [2,4,55,3,8,5,3,1,5]
function myfuction(num) {
    return num*10
}
let newnum = num.map(myfuction)
document.getElementById("result1").innerHTML = newnum;