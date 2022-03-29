window.addEventListener("load",init);
var tomb =[];
function ID(elem){
    return document.getElementById(elem);
}

function $(elem){
    return document.querySelectorAll(elem);
}

function init(){
    sty();
    feltolt();
    var kepek = $("img");
    console.log(kepek);
    for (let index = 0; index < kepek.length; index++) {
        kepek[index].addEventListener("click",kattint);  
    }
    kattint();
}


function kattint(){
    var i = event.target.src;
    tomb.push(i);
    console.log(tomb);
    if(tomb.length>4){
        tomb = [];
    }

}

function feltolt(){
    ID("csonak").innerHTML="<img src='kepek/csonak.png'>";
    var cs = $("article img")[0];
    cs.style.width = "70%";
    
}

function sty(){
    var arr = $("article")[0];
    arr.style.textAlign = "center";
    arr.style.backgroundColor ="lightblue";
    var foo = $("footer p")[0];
    foo.innerHTML = "György Krisztián";
    foo.style.textAlign = "center";
    foo.style.backgroundColor = "lightblue";
    foo.style.fontSize = "20px";    
    console.log(foo);
    var hea = $("header h1")[0];
    hea.style.textAlign = "center";
    var p1 = $("header p")[0];
    p1.style.textAlign = "justify";
    var p = $("p");
    for (let index = 0; index < p.length; index++) {
        p[index].style.margin = "5px 5px 5px 5px";
        
    }
}