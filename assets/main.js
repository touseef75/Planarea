   let h3 = document.getElementById("h3");
        let h4 = document.getElementById("h4");
        let h5 = document.getElementById("h5");
        let h6 = document.getElementById("h6");
        

        let audio = document.getElementById("audio");
        h3.onclick = function(){
            audio.play();
        }
        h4.onclick = function () {
                audio.play();
                
            }
            h5.onclick = function () {
                    audio.play();
                }
    h6.onclick = function () {
        audio.play();
    }

// let video = document.getElementById("video");

// let but = document.querySelector("button");
// let num = 1;
// video.addEventListener("mouseover",function(){
//          video.play();
// })
// video.addEventListener("mouseleave",function(){
//          video.pause();
// })

let e1 =  document.querySelector(".e1");
let e2 =  document.querySelector(".e2");
let e3 =  document.querySelector(".e3");
let e4 =  document.querySelector(".e4");
let e5 =  document.querySelector(".e5");
let e6 =  document.querySelector(".e6");
let e7 =  document.querySelector(".e7");
let e8 =  document.querySelector(".e8");

let num = 1;

let img = document.querySelector("#img");
img.addEventListener("click",function(){
    if(num == 1){
        e1.innerHTML = "Mouth";
        num = 2;
    }else if(num == 2){
        e2.innerHTML = "Pharynx";
        num = 3;
    }else if(num == 3){
        e3.innerHTML = "Oesophagus";
        num = 4;
    }else if(num == 4){
        e4.innerHTML = "Calciferous glands";
        num = 5;
    }else if(num == 5){
        e5.innerHTML = "Crop";
        num = 6;
    }else if(num == 6){
        e6.innerHTML = "Gizzard";
        num = 7;
    }else if(num == 7){
        e7.innerHTML = "Intestine";
        num = 8;
    }
})