
let p1 = "15";
let p2 = "20";
let oper = "+";
let richtig;

//ausgabe parameter
const Rfarbe = "#21a032";
const Rtfarbe = "#90ff9f";
const Rtext = "Richtig";
const Rimg = "img/hacken.png";

const Ffarbe = "#a51616";
const Ftfarbe = "#f08c8c";
const Ftext = "Falsch";
const Fimg = "img/kreuz.png";

function start(){
    const ausgabe = document.getElementById("ausgabe");
    richtig = document.getElementById("richtigBox");
    rtext = document.getElementById("rtext");
    richtig.style.opacity = 0;
    ausgabe.textContent = "";

    const aufgabe = document.getElementById("aufgabe");
    neueAufgabe()
    renderAufgabe();
}
//2+3∙1
window.onload = start;

function clicked(eingabe){
    ausgabe.textContent += eingabe;
}

function enter(){
    const term = p1+""+oper+""+p2;
    if ( math.eval(term) == ausgabe.textContent){
        setCheckBox(true)
    }
    else{
        setCheckBox(false)
    }
}

function del(){
    let temp = "";
    for (let index = 0; index < ausgabe.textContent.length-1; index++) {
        temp += ausgabe.textContent.charAt(index);
    }
    ausgabe.textContent = temp;
}

function setCheckBox(isRichtig){
    if (isRichtig){
        richtig.style.background = Rfarbe;
        rtext.style.color = Rtfarbe;
        rtext.textContent = Rtext;

        let img = document.createElement("img");
        img.src = Rimg;
        img.style.width = "40px";
        rtext.appendChild(img);
    }
    else{
        richtig.style.background = Ffarbe;
        rtext.style.color = Ftfarbe;
        rtext.textContent = Ftext;

        let img = document.createElement("img");
        img.src = Fimg;
        img.style.width = "25px";
        rtext.appendChild(img);
    }
    ausgabe.textContent = "";
    richtig.style.opacity = 1;
    renderAufgabe();
    setTimeout(() => {
        richtig.style.opacity = 0;
        if (isRichtig){
            neueAufgabe();
        }
    }, 1000);
}

function neueAufgabe(){
    ausgabe.textContent = "";

    let tempOper = Math.floor(Math.random() * 4);
    switch (tempOper) {
        case 0:
            oper = "+";
            break;
        case 1:
            oper = "-";
            break;
        case 2:
            oper = "*";
            break;
        case 3:
            oper = "/";
            break;
    
        default:
            break;
    }
    if (oper == "*" || oper == "/"){
        p1 = Math.floor(Math.random() * 21);
        p2 = Math.floor(Math.random() * 21);
    }
    else{
        p1 = Math.floor(Math.random() * 101);
        p2 = Math.floor(Math.random() * 101);
    }

    if (oper == "/" && p2 == "0"){
        neueAufgabe();
    }

    renderAufgabe();
}

function renderAufgabe(){
    let tOper;
    if (oper == "*"){
        tOper = "∙";
    }
    else if(oper == "/"){
        tOper = ":";
    }
    else{
        tOper = oper;
    }
    aufgabe.textContent = p1+tOper+p2+"=";
}