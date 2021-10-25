let data = [
    {
        question:"Q1) Planaria belong to the phylum?",
        a:"a) Cestoda",
        b:"b) Platyhelminthes",
        c:"c) Cnidaria",
        d:"d) Porifera",
        ans:"ans2",
    },
    {
       question:"Q2) What class do planaria belong to?",
        a:"a) Cestoda",
        b:"b) Trematoda",
        c:"c) Animalia",
        d:"d) Turbellaria", 
        ans:"ans4",
    },
     {
       question:"Q3) The structure that planaria use to eat is called?",
        a:"a) mouth",
        b:"b) Pharynx",
        c:"c) feeding tube",
        d:"d) digestive tract", 
        ans:"ans2",
    },
    {
       question:"Q4) A planarian is?",
        a:"a) Photosynthetic",
        b:"b) Autotrophic",
        c:"c) Parasitic",
        d:"d) free-living", 
        ans:"ans4",
    },
    {
       question:"Q5) What are the chemo-receptors in planaria called?",
        a:"a) Ears",
        b:"b) Auricles",
        c:"c) Flame Cells",
        d:"d) Eyespots", 
        ans:"ans2",
    },
    {
       question:"Q6) What type of water do planaria live in?",
        a:"a) Salt water",
        b:"b) Frozen",
        c:"c) Tap Water",
        d:"d) Fresh/Spring Water", 
        ans:"ans4",
    },
    {
       question:"Q7) When the planaria were startled or stressed they?",
        a:"a) Ran away",
        b:"b) Rolled over",
        c:"c) Bunched up",
        d:"d) Died", 
        ans:"ans3",
    },
    {
       question:"Q8) In planaria, numerous small branches which end blindly are called as?",
        a:"a) Digestive tract",
        b:"b) Hepatic caeca",
        c:"c) Intestinal caeca",
        d:"d) Both B & C", 
        ans:"ans3",
    },
]
let question = document.getElementById("question");
let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
let d = document.getElementById("d")
let but = document.getElementById("but");
let total = document.getElementById("scoreArea")
let incre = 0;
let add = 0;
let answers = document.querySelectorAll(".answere")
function detail(){
    let arr = data[incre];
    question.innerHTML = arr.question;
    a.innerHTML = arr.a;
    b.innerHTML = arr.b;
    c.innerHTML = arr.c;
    d.innerHTML = arr.d;
}
detail();
 function getid(){
     let answer;
     answers.forEach((everyEle)=>{
        if(everyEle.checked){
            answer = everyEle.id;
        }
     })
     return answer;
 } 



let audio2 = document.getElementById("audio1");
    


but.addEventListener("click",()=>{
        img.src=" ";
        audio2.play();

      incre++;
    if(incre < data.length){
        detail();
    }else{
        
    }

})

let img = document.getElementById("img");
    let but2 = document.getElementById("but2");
let audio1 = document.getElementById("audio");

but2.onclick = function(){
    var main = getid();
    console.log(main)
    if(main == data[incre].ans){
        add++;
        audio1.play();
        img.src= "./image2/check.gif";
    }else{
        img.src = "./image2/wrong.png"
    }
}




let info = document.getElementById("info");
let main1 = document.getElementById("main1");
let nfq = document.getElementById("nfq");
let nfa = document.getElementById("nfa");



let cal = document.getElementById("cal");
cal.addEventListener("click",function(){
        audio2.play();

    nfq.innerHTML =  "= " + data.length;
    nfa.innerHTML =  "= " +  add;
    info.style.display = "";
    main1.style.display = "none";
    but.disabled = true;
    

})

let ok = document.getElementById("ok");

ok.onclick = function(){
        audio2.play();
    but.disabled = false;

    info.style.display = "none";
    main1.style.display = "";
}



   
   
   
   
   
   
   
   
   
   
   
   
   
   




