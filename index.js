// let a = document.querySelector(".present");
tex = document.getElementById("pre")
butt = document.getElementById("btn")
clo = document.getElementById("close")
comp = document.getElementById("complete")

butt.onclick = function() {
    tex.style.display = "block";
    comp.style.backgroundColor = "darkgrey";
    tex.style.backgroundColor = "white";

}
clo.onclick = function() {
    tex.style.display = "none";
    comp.style.backgroundColor = "white";
}
