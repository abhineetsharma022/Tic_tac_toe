console.log("welcome")
let music=new Audio("win.mp3.wav");
let audioturn=new Audio("ting.mp3.wav");
let turn="X";
let isgameover=false;
//function to change the turn
const changeTurn=()=>{
    return turn === "X"?"0": "X"
}
//function to check win
const checkwin =()=>{
let boxtext= document.getElementsByClassName('boxtext')
let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
        isgameover = true
        music.play();
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector(".line").style.width = "20vw";
       
    }
})

}
// game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext =element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn=changeTurn();
            audioturn.play();
            checkwin();
            if(!isgameover){ 
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            }
        }

    })
})