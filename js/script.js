// this is your custom javascript code
let ns = "http://www.w3.org/2000/svg"

let desvg = document.createElementNS("http://www.w3.org/2000/svg","svg");
desvg.setAttribute("id","mySvg");
desvg.setAttribute("viewBox","0 0 640 360");
desvg.setAttribute("width", "800px");
desvg.setAttribute("height", "360px");

function addCircle(cx,cy){
    let cirkel = document. createElementNS("http://www.w3.org/2000/svg", "circle");
    cirkel.setAttribute("cx", cx);
    cirkel.setAttribute("cy", cy);
    cirkel.setAttribute("r", 2);
    cirkel.setAttribute("fill", "black");
    return cirkel;
}

for (let i = 0; i < cities.length; i++) {
    let positieX = (cities[i].longitude + 180)*2;
    let positieY = (90- cities[i].latitude)*2;
    desvg.appendChild(addCircle(positieX,positieY))
    }

document.body.appendChild(desvg)
