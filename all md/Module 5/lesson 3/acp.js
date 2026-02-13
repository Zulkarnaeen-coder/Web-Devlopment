let nums = [2,5,3,3,5,76,32,4,6,8,56,5,4,3,5,9,8,7]
function myfuction(nums) {
    return nums * 10
}
let newnum = nums.map(myfuction)
document.getElementById("result").innerHTML = newnum;
var point = newnum ;
document.getElementById("result1").innerHTML = point;
function AscendingOrder() {
    point.sort(function (a, b) { return a - b })
    document.getElementById("result1").innerHTML = point;
}
var point = newnum
document.getElementById("result2").innerHTML = point;
function DescendingOrder() {
    point.sort(function (a, b) { return b - a })
    document.getElementById("result2").innerHTML = point;
}