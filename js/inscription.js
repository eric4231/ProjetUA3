const ins_enregistrer = document.getElementById('ins_enregistrer');
const ins_msg1 = document.getElementById('ins_msg1');
const ins_msg2 = document.getElementById('ins_msg2');
const ins_msg3 = document.getElementById('ins_msg3');
const ins_msg4 = document.getElementById('ins_msg4');
const ins_msg5 = document.getElementById('ins_msg5');
const inscription = document.querySelector('.inscription')
const ins_bienvenu = document.getElementById('ins_bienvenu')
const ins_titre = document.getElementById('ins_titre')

const ins_mdp = document.getElementById('ins_mdp');
const ins_rmdp = document.getElementById('ins_rmdp');
const ins_email = document.getElementById('ins_email');
const ins_remail = document.getElementById('ins_remail');
const ins_nom = document.getElementById('ins_nom');
const ins_prenom = document.getElementById('ins_prenom');
const no_nalue = document.getElementById('ins_null').value

 
ins_enregistrer.addEventListener('click', function() {

    ins_msg4.style.display = 'none'
    ins_msg3.style.display = 'none'
    ins_msg2.style.display = 'none'
    ins_msg1.style.display = 'none'
    ins_msg5.style.display = 'none'

    if(ins_mdp.value == no_nalue || ins_email.value == no_nalue || ins_remail.value == no_nalue || ins_rmdp.value == no_nalue || ins_nom.value == no_nalue || ins_prenom.value == no_nalue){
        ins_msg4.style.display = 'block'
    }

    else if(ins_email.value != ins_remail.value){
        ins_msg3.style.display = 'block'
        ins_remail.value = no_nalue
    }

    else if(ins_mdp.value != ins_rmdp.value){
        ins_msg2.style.display = 'block'
        ins_rmdp.value = no_nalue
        ins_mdp.value = no_nalue
    }

    else if(ins_mdp.value.length < 8) {
        ins_msg5.style.display = 'block'
    }

    else{
        ins_msg1.style.display = 'block'
        inscription.style.display = 'none'
        ins_titre.style.display = 'none'
        ins_bienvenu.textContent = ins_bienvenu.textContent + ins_prenom.value + ' ' + ins_nom.value + '!'
    }
    console.log(ins_mdp.length)
    
})