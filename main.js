const move = document.getElementsByClassName("move");
const add = document.getElementsByClassName("add");
const addten = document.getElementsByClassName("addten");
const remove = document.getElementsByClassName("remove");
const circle_box = document.getElementsByClassName("circle_box");
const circle = document.getElementsByClassName("circle");
const sizeBtn = document.getElementsByClassName("sizeBtn");
const colorBtn = document.getElementsByClassName("colorBtn");
move[0].addEventListener("click", function () {
    for (i = 0; i < 500; i++) {
        if (Math.random() > 0.5) {
            var plusMinus = "+"
        } else {
            var plusMinus = "-"
        }
        let randomhorizontal = Math.random() * 500;
        let randomvertical = Math.random() * 500;
        circle[i].style.top = `${plusMinus}` + `${randomhorizontal}`+"px";
        circle[i].style.left = `${plusMinus}` + `${randomvertical}`+"px";
    }
})
add[0].addEventListener("click", function () {
    let newCircle = document.createElement("div");
    newCircle.className = "circle";
    circle_box[0].appendChild(newCircle);
})
addten[0].addEventListener("click", function () {
    for (i = 0; i < 10; i++){
        let newCircle = document.createElement("div");
        newCircle.className = "circle";
        circle_box[0].appendChild(newCircle);
    }
})
remove[0].addEventListener("click", function () {
    circle_box[0].innerHTML = "";
})

function setting(){
    if(document.getElementsByClassName("setting")[0].style.display=="none"){
       document.getElementsByClassName("setting")[0].style.display='inline-block'
    }else{
       document.getElementsByClassName("setting")[0].style.display='none'
    }
}

function circleSize() {
    for (i = 0; i < 500; i++) {
        circle[i].style.width = sizeBtn[0].value + "px";
        circle[i].style.height = sizeBtn[0].value + "px";
    }
}

function circleColor() {
    for (i = 0; i < 500; i++) {
        circle[i].style.backgroundColor = colorBtn[0].value;
    }
}