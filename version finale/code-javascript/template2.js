
for (let x =1; x<localStorage.getItem("clé"); x++){
    
        
        data = JSON.parse(localStorage.getItem(x));
        let scene = document.querySelector('#paniers')
        let clone = document.importNode(scene.content,true)
        let titre = clone.querySelector("h2")
        let donnees = clone.querySelectorAll("h1")
        titre.setAttribute('id', 1)
        titre.textContent = "destination "+ " :"+ data.ville1;
        let bouton = clone.querySelector("form")
        bouton.setAttribute('id', x)
        donnees[0].textContent ="petitdej : "+ data.petitdej1;
        donnees[1].textContent = "date de depart : "+ data.dateDepart1;
        donnees[2].textContent = "date d'arrivée : "+ data.dateArrivee1;
        donnees[3].textContent = " adultes : "+ data.nbAdultes1;
        donnees[4].textContent =" enfants : "+ data.nbEnfants1;
        donnees[5].textContent ="prix : "+data.prix1;


        document.body.appendChild(clone)
        
    }
    function annulerReservation(){
       
        key = parseInt(this.id)
        for (let x =key+1; x<localStorage.getItem("clé"); x++){
            y=x-1
            data = localStorage.getItem(x);
            localStorage.setItem(y, data)
        }
        clé = parseInt (localStorage.getItem("clé"))-1
        localStorage.setItem("clé",  clé);
    
    }
                      
                        

