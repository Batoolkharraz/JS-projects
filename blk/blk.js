
let cards=[]
let sum =0
let hasBJ=false
let isAlive=false
let msg=""
let msgH=document.getElementById("msg")
let sumH=document.getElementById("sum")
let cardH=document.getElementById("card")
let player=document.getElementById("player")

let play={
    Name:"per",
    Chips:145
}


player.textContent=play.Name+": $"+play.Chips
function startgame(){
    isAlive=true
    let fcard=randomCard()
    let scard=randomCard()
    sum=fcard+scard
    cards=[fcard,scard]
    rendergame()
}
function rendergame(){
    if (sum<=20){
        msg="Do you want to draw a new card?"
    } else if(sum===21){
        msg="WOHOOOO!! you've got Blackjack!"
        hasBJ=true
    }else{
        msg="you're out of the game!"
        isAlive=false
    }
    msgH.textContent=msg
    sumH.textContent="sum: "+sum
    cardH.textContent="cards: "
    for(let i=0;i<cards.length;i++){   
        cardH.textContent+=cards[i] +"  "
    }
}

function newcard(){
    if(isAlive===true && hasBJ===false){
    let card=randomCard()
    sum+=card
    cards.push(card)
    rendergame()
}
else{
    msg="you're out of the game!,NO CARDS TO U"
    msgH.textContent=msg
}
}

function randomCard(){
    let r= (Math.floor(Math.random()*13)+1)
    if(r>10){
        return 10
    }else if (r===1){
        return 11
    }else{
        return r
    }


}