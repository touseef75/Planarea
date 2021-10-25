let data = [
    {
        question:"Q1) In earthworm, the mouth is located on ?",
        a:"a) Stomium",
        b:"b) Peristomium",
        c:"c) Prostomium",
        d:"d) Protostomium",
        ans:"ans2",
    },
    {
       question:"Q2) The earthworm is placed under the group?",
        a:"a) Polychaeta",
        b:"b) Hirudinea",
        c:"c) Oligochaeta",
        d:"d) Crustacea", 
        ans:"ans3",
    },
     {
       question:"Q3) The typhlosole found in Pheretima occurs in?",
        a:"a) Gizzard",
        b:"b) Intestine",
        c:"c) Oesophagus",
        d:"d) Stomach", 
        ans:"ans2",
    },
    {
       question:"Q4) The most effective organ for food digestion in earthworm is?",
        a:"a) Pharynx",
        b:"b) Mouth",
        c:"c) Gizzard",
        d:"d) Buccal cavity", 
        ans:"ans1",
    },
    {
       question:"Q5) This animal does not show any metamorphosis of larval stage?",
        a:"a) Asteria",
        b:"b) Musca domestica",
        c:"c) Pheretima Posthuma",
        d:"d) Butterfly", 
        ans:"ans3",
    },
    {
       question:"Q6) Chloragogen cells are found in?",
        a:"a) Blood of earthworm",
        b:"b) The coelomic fluid of the earthworm",
        c:"c) Blood of cockroach",
        d:"d) The body wall of leucosolenia", 
        ans:"ans2",
    },
    {
       question:"Q7) The parasite found in the seminal vesicle of earthworms are?",
        a:"a) Nosema",
        b:"b) Sarcocystis",
        c:"c) Monocystis",
        d:"d) Nyctotherus", 
        ans:"ans3",
    },
    {
       question:"Q8) The typhlosole in earthworm is related to?",
        a:"a) respiration",
        b:"b) excretion",
        c:"c) absorption",
        d:"d) reproduction", 
        ans:"ans3",
    }, {
       question:"Q9) Colour of the body in earthworms is due to the presence of?",
        a:"a) Haemoglobin",
        b:"b)  Blood",
        c:"c) Porphyrin",
        d:"d) Haemocyanin", 
        ans:"ans3",
    }, {
       question:"Q10)  Region of earthworm that is a forest of nephridia is?",
        a:"a) Pharyngeal region",
        b:"b) Clitellar region",
        c:"c) Typhlosolar region",
        d:"d) Intestinal region", 
        ans:"ans2",
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



   
   
   
   
   
   
   
   
   
   
   
   
   
   




