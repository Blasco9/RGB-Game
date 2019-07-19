alert("conected");
const buttons=document.getElementsByClassName("square");
const btns=document.getElementsByTagName("button");
let color="";
let won;

setup(6);

function setup(x){
    const span=document.querySelector("span");
    let num=Math.floor(Math.random()*x);
    won=false;

    initializeButtons();
    span.textContent=buttons[num].style.backgroundColor;
    color=span.textContent;

    for(let i=0;i<btns.length;i++){
        i==0 ? btns[i].onclick=reset : btns[i].onclick=change;
    }
}

function initializeButtons(){
    for(let i=0;i<buttons.length;i++){
        buttons[i].style.backgroundColor=randomColor();
        buttons[i].addEventListener("click",check);
    }
}

function randomColor(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);

    return `rgb(${red}, ${green}, ${blue})`;
}

function check(event){
    let btnColor=event.target.style.backgroundColor;

    if(btnColor==color){
        document.getElementById("header").style.backgroundColor=btnColor;
        btns[0].textContent="Play Again?";
        for(let i=0;i<buttons.length;i++){
            buttons[i].style.backgroundColor=btnColor;
        }
        document.querySelector("#msj").innerHTML="Correct";
        won=true;
    } else {
        event.target.style.backgroundColor="#232323";
        document.querySelector("#msj").innerHTML="Try Again";
    }
}

function reset(){
    setup(6);
    const panel=document.querySelectorAll("div");
    panel[0].style.backgroundColor="steelblue";
    panel[1].style.backgroundColor="white";
    document.querySelector("#msj").innerHTML="";
    this.textContent="New Colors";
};

function change(event){
    if(!won){
        btns[1].classList.toggle("selected");
        btns[2].classList.toggle("selected");

        let id=event.target.id;
        
        if(id=="easy"){
            setup(3);
            for(let i=3;i<buttons.length;i++){
                buttons[i].style.display="none";
            }   
        } else {
            setup(6);
            for(let i=3;i<buttons.length;i++){
                buttons[i].style.display="block";
            }
        }
    }
}
