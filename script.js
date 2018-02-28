console.log("script running")

let mycooldiv = document.querySelector("#bestdiv")
let resultsdiv = document.querySelector("#results")

console.log(mycooldiv)
console.log(resultsdiv)

window.addEventListener("keydown", e => {
    console.log(e.key)
    resultsdiv.innerHTML += `<img width="80px" src="http://3.bp.blogspot.com/-AAtMS2pqX48/Ti2KVTN9M_I/AAAAAAAAAmc/ty2v0LXNgbc/s400/71979251_yLVzkVrF_c.jpg" />`
})