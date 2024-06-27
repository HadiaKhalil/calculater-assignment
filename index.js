function cal(val) {
    document.getElementById('a').value += val;
}
function solution() {
    let a = document.getElementById('a').value;
    let b = eval(a);
    document.getElementById('a').value = b
}
function mpt() {
    document.getElementById("a").value = " ";
}

function pop() {
    document.getElementById("a").value = " ";

}
// function del() {
//     document.getElementById("a").value = " ";

// }
function del(){
    a.value = a.value.slice(0 ,-1)
}