// ___________AFFICHER LE FORMULAIRE AU CLIC SUR LE BOUTON CONTACT - page boutique_________________________________

// déclaration des variables / sélections des contenus dans le fichier html
//selection du bouton "contact"
const BOUTONBOUTIQUE=document.querySelector(".boutonContactboutique")
//selection de la section formulaire "contact"
const SECTIONFORM=document.querySelector("#formContact");
//selection de la balise form 
const FORM=document.querySelector(".champText");
//selection du bouton "envoyer" du formulaire (pour soumettre les données)
const ENVOYER=document.querySelector(".envoyer");
//selection des champs du formulaire 
const NOM=document.querySelector(".nomContact");
const PRENOM=document.querySelector(".prenomContact");
const EMAIL=document.querySelector(".emailContact");
const MESSAGE=document.querySelector(".message");
const CONFIDENTIALITE=document.querySelector(".confidentialite");
const CONDITIONS=document.querySelector(".conditions");
//selection du bouton de fermeture de la fenêtre concernant le formulaire
const FERMETURE=document.querySelector("#fermeture");

// création d'un évenement d'écoute (addEvenListener) pour afficher le formulaire au clic
BOUTONBOUTIQUE.addEventListener("click",()=>{
     // afficher la section du formulaire au clic si elle est cachée en css (par display:none)
     if (SECTIONFORM.style.display == "none"){
      SECTIONFORM.style.display = "block"; 
    }else{
         //cacher la section du formulaire au clic au second clic sur le bouton
      SECTIONFORM.style.display = "none"; 
    }
})

/*création d'un évenement d'écoute (addEvenListener)
  pour récupérer les donnees au clic sur le bouton "envoyer" du formulaire */
  FORM.addEventListener("submit",(event)=>{
    //arrêter l'actualisation du navigateur
    event.preventDefault();
    // afficher les données en console
      console.log(NOM.value);
      console.log(PRENOM.value);
      console.log(EMAIL.value);
      console.log(MESSAGE.value);
    //après envoi, effacer le contenu des champs et décocher les checkbox
    NOM.value="";
    PRENOM.value="";
    EMAIL.value="";
    MESSAGE.value="";
    CONFIDENTIALITE.checked=false;
    CONDITIONS.checked=false;
    SECTIONFORM.style.display = "none"; 
    alert(`  Merci pour votre demande, 
    Vous allez recevoir un mail de confirmation
    et vous devrez recevoir une réponse dans les 48h.
    Bien cordialement
    L'équipe Alteroshop`)
  })

// fermeture de la fenetre au clic sur la croix => balise "i" (#fermeture)
FERMETURE.addEventListener("click",()=>{
  SECTIONFORM.style.display = "none"; 
})

// ___________AJOUTER DES CONTENUS AU PANIER_________________________________
// déclaration des variables / sélections des contenus dans le fichier html
//selection du bouton "ajouter au panier"
const AJOUTPANIER=document.querySelectorAll(".ajoutPanier")


AJOUTPANIER.forEach(cell => {
  cell.addEventListener("click",()=>{
  alert("Votre article a été ajouté au panier")
})
})