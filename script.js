/*Vérification du formulaire */
function verifi(){
    if (document.getElementById('nom').value=="") {
    alert('Veuiller saisir votre nom');
    return false;
    }else{
        if(document.getElementById('adr').value==""){
            alert('Veuiller saisir votre adresse');
            return false;
        }else{
            if(document.getElementById('email').value==""){
            alert('Veuiller saisir votre adresse email');
            return false;
            }else{ 
            if(document.getElementById('email').value.indexOf("@")==-1 ){
                alert("il faut forcement une @ sur un mail");
                return false;
            } else{
                if(document.getElementById('mdp').value==""){
                  alert('mots de passe incorrect correct');
                }else{
                    if (document.getElementById('tel').value==0) {
                        alert('Veuiller saisir votre numero telephone');
                        return false;
                    }else if(document.getElementById('tel').value<100000000){
                        alert('le numero doit avoir 9 chiffres');
                        return false;
                }
            }
        }
    }
}
}
}

/* Envoi du formulaire par email */
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_d38lsft';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Envoyer';
      alert('Message envoyé!');
    }, (err) => {
      btn.value = 'Envoyer';
      alert(JSON.stringify(err));
    });
});

