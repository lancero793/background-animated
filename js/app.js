function createSquare(){
    const container = document.querySelector("section");
    const square = document.createElement("span");
    const colors = ["#5852F2", "#F2CB05", "#F29F05", "#F26B5E", "#F20C0C", "#3BBFBF", "#1ED982", "#F2CB05", "#F25C05", "#F24B4B"] ;
    let color = Math.ceil(Math.random() * colors.length -1);
    let size = Math.random() * 50;
    square.style.background = colors[color];
    square.style.width = 20 + size + "px";
    square.style.height = 20 + size + "px";
    square.style.top = Math.random() * innerHeight + "px";
    square.style.left = Math.random() * innerWidth + "px";

    container.appendChild(square)

    setTimeout(()=>{
        square.remove()
    }, 5000);

}

setInterval(()=>{
    createSquare();
}, 150);