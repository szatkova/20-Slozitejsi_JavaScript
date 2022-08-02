console.log("JavaScript funguje!");

let visualniHlavniOdstavec=document.querySelector(".hlavni-odstavec");
visualniHlavniOdstavec.textContent="Domovska stranka";

let visualnimojefoto = document.querySelector(".moje-foto");
visualnimojefoto.src="img/druhe-foto.jpeg";

let visualnivzdelani=document.querySelector(".vzdelani");
visualnivzdelani.textContent="Skoly";

let visualniprednastavenise=document.querySelector(".predstaveni-se");
visualniprednastavenise.style.color = "#0000FF";

function pridejzvyrazneni(){
    let visualnitlacitko1=document.querySelector(".tlacitko1");
    visualnitlacitko1.classList.add("zvyrazneny");
}