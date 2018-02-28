console.log("script running")

let mydiv = document.querySelector("#bestdiv")
let resultsdiv = document.querySelector("#results")

console.log(mydiv)
console.log(resultsdiv)

mydiv.addEventListener("click", e => {
    console.log("Div clicked!")
    resultsdiv.innerHTML += `<img width="80px" src="http://3.bp.blogspot.com/-AAtMS2pqX48/Ti2KVTN9M_I/AAAAAAAAAmc/ty2v0LXNgbc/s400/71979251_yLVzkVrF_c.jpg" />`
})
