function changeColor(){
    document.body.style.backgroundColor=
    'rgb('+ Math.round(Math.random())*255+
    ','+ Math.round(Math.random())*255 +
    ','+ Math.round(Math.random())*255 + ')';
}

document.getElementById("discover-box")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const discoverBox = document.getElementById("discover-box");
        window.location.href = "blog.html";
    })