//recuperation du formulaire ---------------------------
let monFormulaire =document.getElementById("id_formulaire");
const envoi=document.querySelector("#id_Envoyer")
//Declaration de mes diffentes varables----------------------
var leNom =document.getElementById("nom");
const leCorpForm= document.querySelector(".corps-de-page")
var lemail =document.getElementById("email");
var leTel=document.getElementById("tel")
var errorNom= document.querySelector("#id_smallNom");
var errorEmail= document.querySelector("#id_smallEmail");
var errorTel= document.querySelector("#id_smallTel");
// regex pour tester le mail-----------------
let regexMail=/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/m;
//ajout d'un ecouteur d'evenement sur le formulaire-------------
envoi.addEventListener('click',  function(){
    if(leNom.value==""){
        leNom.style.border="2px solid red"
        errorNom.innerHTML="Assurez-vouz de bien remplir tous le champs nom!";
        errorNom.style.color="red";
    }
    else{
        leNom.style.border="2px solid green"
        errorNom.innerHTML="";
    }
    if(leTel.value.length<10){
        errorNom.innerHTML="Assurez-vouz de bien remplir  le champs  telephone avec min 10";
        leTel.style.border="2px solid red";

     }
    else {
        leTel.style.border="2px solid green"
        errorNom.innerHTML="";
       
    }
    /*if (!regexMail.test(monFormulaire.lemail)) {
        lemail.innerHTML="Assurez-vouz de bien remplir  le champs  mail!";
        lemail.style.border="2px solid red";
    }
    else{
        lemail.style.border="2px solid green"
        errorNom.innerHTML="";
    }*/
  leCorpForm.style.display="none";
  
    
});

// Gestiondes evenements sur le site -------------------
var elements = document.getElementsByClassName('mesAutres-pages');
for (var i = 0 ; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", function() {
        this.style.border="2px solid green";
    }, true)
    
   
}

