const box = document.querySelector(".box")


function randomColor() {
    const blue = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const alpha = Math.floor(Math.random()*255);
    const red = Math.floor(Math.random()*255);   
    return rgba = (`rgba(${blue}, ${alpha}, ${red}, ${green})`);
}

function changeColor()  {
    box.style.background = randomColor();    
    box.style.width = Math.floor(Math.random()*255)+"px";
    box.style.height = Math.floor(Math.random()*550)+"px";
   
   
}


