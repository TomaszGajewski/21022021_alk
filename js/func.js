const example = (e) =>{
    e.preventDefault();
    const fromInput = document.getElementById("example").value;
    document.getElementById("text").textContent = fromInput;
}

// function rewriteFunc(){
//     var x = document.getElementById("textCopy").value;
//     document.getElementById("rewrite").innerHTML = x;
// } My version

document.getElementById("action").addEventListener("click",example);

