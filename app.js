let body = document.querySelector("body");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

function changeBc() {
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    let color = "#";
    for (let i = 0; i < 6; i++) {
        //console.log(num)
        color = color + num[Math.floor(Math.random() * num.length)];
    }
    return color;
}


let intervalId;
function startChangingColor() {
    if(!intervalId)
 {
    intervalId = setInterval(function () {
        document.body.style.backgroundColor = changeBc();
    }, 200)
 }
};

function stopChangingColor() {
    clearTimeout(intervalId);
    intervalId = null;
}

btn1.addEventListener("click", startChangingColor);

btn2.addEventListener("click", stopChangingColor);