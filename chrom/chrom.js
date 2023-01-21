
let leads=[]
const save=document.getElementById("save")
const deleteBtn=document.getElementById("delete")
const input= document.getElementById("input")
const ul= document.getElementById("ul")
const leadsLS=JSON.parse(localStorage.getItem("mylead"))
const tabBtn=document.getElementById("tab")

if(leadsLS){
    leads=leadsLS
    render(leads)
}

save.addEventListener("click",function(){
    leads.push(input.value)
    input.value=""
    localStorage.setItem("mylead",JSON.stringify(leads))
    render(leads)
})

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        leads.push(tabs[0].url)
        localStorage.setItem("mylead",JSON.stringify(leads))
        render(leads)
    })

})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    leads=[]
    render(leads)
})

function render(myleads){
    let list=""
    ul.innerHTML=""
    for(let i=0; i<myleads.length;i++){
        list+=`
        <li>
            <a target='_blank' href='${myleads[i]}'>
                ${myleads[i]}
            </a>
            </li>
            `
    }
    ul.innerHTML+=list
}