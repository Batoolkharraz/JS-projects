let c=0;
let cEl=document.getElementById("count");
let info=document.getElementById("enter-info");
        

function increment(){
    c=c+1;
    cEl.innerHTML=c;

}

function save(){
    let msg= c+" - "
    info.textContent+=msg;
    c=0;
    cEl.innerHTML=c;




}