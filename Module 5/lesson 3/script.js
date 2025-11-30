var point = [1,34,245,56,43,87,56,43,26,456,45]
document.getElementById("result1").innerHTML = point;
function AscendingOrder(){
    point.sort(function (a,b){return a-b})
    document.getElementById("result1").innerHTML = point;
}
var point = [1, 34, 245, 56, 43, 87, 56, 43, 26, 456, 45]
document.getElementById("result2").innerHTML = point;
function DescendingOrder() {
    point.sort(function (a, b) { return b - a })
    document.getElementById("result2").innerHTML = point;
}