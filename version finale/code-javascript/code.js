class destination {
    constructor(pays,ville,prix,dejeuner,date,animaux,show,datedebut,datefin,emplacement,id,imag){
    this.pays = pays;
    this.ville = ville;
    this.prix = prix;
    this.dejeuner = dejeuner;
    this.date = date;
    this.animaux = animaux;
    this.show = show
    this.datedebut = datedebut
    this.datefin = datefin
    this.emplacement = emplacement
    this.id = id 
    this.imag = imag
    }
}



//destination


var Lyon =  new destination('France','Lyon',50,'dejeuner','date','pasanimaux',1,'December 12, 2019 00:00:00','january 12, 2020 00:00:00','#destination1',1,'../image/L.jpg')
var Paris =new destination('France','Paris',60,'pasdejeuner','date','animaux',1,'october 07, 2019 00:00:00','january 01, 2020 00:00:00','#destination2',2,'../image/P.jpg')
var Budapest = new destination('Roumanie','Budapest',70,'dejeuner','date','animaux',1,'january 17, 2020 00:00:00','march 19, 2020 00:00:00','#destination3',3,'../image/B.jpg')
var Kyoto = new  destination('Japon','Kyoto',90,'pasdejeuner','date','animaux',1,'november 20, 2019 00:00:00','november 30, 2019 00:00:00','#destination4',4,'../image/Kyoto.jpg')
var Tokyo = new destination('Japon','Tokyo',110,'dejeuner','date','pasanimaux',1,'june 01, 2020 00:00:00','june 12, 2020 00:00:00','#destination5',5,'../image/okyo.jpeg')
var Rio = new destination('Bresil','Rio',20,'pasdejeuner','date','pasanimaux',1,'january 02, 2020 00:00:00','february 07, 2020 00:00:00','#destination6',6,'../image/Rio.jpg')



//pour la connection



var listedest = [Lyon,Paris,Budapest,Kyoto,Tokyo,Rio]


//fonction de connexion

//client
class client {
    constructor(identifiant,motdepasse){          
    this.identifiant = identifiant
    this.motdepasse = motdepasse
    }
}
var jean = new client('polo','qwerty')
var jack = new client('gauthier','asdf')
var customeur =  [ jean ,jack ]

function connexion(){
    var identifiant = document.getElementById('identifiant').value
    var motdepasse = document.getElementById('motdepass').value
    sessionStorage.setItem('identifiant','erreur')

    for (let y of customeur){
        if(y.identifiant == identifiant){
            if (y.motdepasse == motdepasse){
                sessionStorage.setItem('identifiant',y.identifiant)
               
           
            }

        }
      
    }

   

}
//si connecter


var custom=['polo','gauthier']


    var connex =  sessionStorage.getItem('identifiant')
   
// se lance a chaque fois qu une page html est appeler avec ce js 
for(let x of custom){
    if(x == connex){
  
    $('#connexion').hide()
    $('#connecte').html('session de '+connex)
    
    } 
if(connex == 'erreur'){
    alert('identifiant ou mot de passe')
}

    }

//affichage
function charger(){

    let H = new URLSearchParams(window.location.search).get('id')
    $('#tet').html('<h2> voyage a '+listedest[H-1].ville+ '</h2>')  
    }


    

//fonction pour le formulaire


function init(){
    localStorage.setItem("clé", 1)
}

function calculPrix() {
    //partie entete
        let p = new URLSearchParams(window.location.search).get('id')
        $('#tet').html('<h2> voyage a '+listedest[p-1].ville+ '</h2>')  

    //partie calcul du prix
    let nbAdultes = document.getElementById("nbreadultes").value;
    let nbEnfants = document.getElementById("nbreenfants").value;
    let dateDepart = new Date(document.getElementById("datedepart").value);
    let dateArrivee = new Date( document.getElementById("datearrivee").value);
    let petitdej = document.getElementById("oui").value;
    let nom = document.getElementById("Nom").value
    let prenom = document.getElementById("Prenom").value
    let supplement = "non"
    document.getElementById("datearrivee").min = document.getElementById("datedepart").value
    var today = new Date();

    var dd = today.getDate();

    var mm = today.getMonth() + 1; //Janvier est 0 

    var yyyy = today.getFullYear();

    if (dd < 10) {

        dd = '0' + dd

    }

    if (mm < 10) {

        mm = '0' + mm

    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("datedepart").min = today


    if (petitdej == 1){
        supplement = "oui"
    }
    if (petitdej == 0){
        supplement = "non"
    }
    
    let duree = Math.ceil((dateArrivee.getTime()-dateDepart.getTime())/(1000*60*60*24)+1);//n existe pas

    let key = new URLSearchParams(window.location.search).get("id");

    var MaVille=listedest[key-1];


    let prix =  duree*petitdej*12*nbAdultes+ duree*petitdej*12*nbEnfants + duree*MaVille.prix*nbAdultes + duree*MaVille.prix*nbEnfants*0.4;

    document.getElementById("par_prixx").innerHTML = prix

    var mois1= parseInt(dateDepart.getMonth())+1    

    var mois2= parseInt(dateArrivee.getMonth())+1
    nb= String(localStorage.getItem("clé"));
    var data={	

        ville1 : MaVille.ville,
        petitdej1 :supplement,
        dateDepart1: dateDepart.getFullYear()+'-'+mois1+'-'+dateDepart.getDate(),
        dateArrivee1: dateArrivee.getFullYear()+'-'+mois2+'-'+dateArrivee.getDate(),
        nbAdultes1:nbAdultes,
        nbEnfants1:nbEnfants,
        nom1:nom,
        prenom1:prenom,
        prix1:prix,
        numVol : parseInt(1000000000000* Math.random())
        }
    var value = JSON.stringify(data);
    localStorage.setItem(nb, value);
}


function recap(){
    nb= (localStorage.getItem("clé"));

    val = JSON.parse(localStorage.getItem(nb));
    document.getElementById("par_ville").innerHTML = val.ville1;
    document.getElementById("par_prenom").innerHTML = val.prenom1;
    document.getElementById("par_petitdej").innerHTML = val.petitdej1;
    document.getElementById("par_arrivee").innerHTML = val.dateArrivee1;
    document.getElementById("par_enfants").innerHTML = val.nbEnfants1;
    document.getElementById("par_nom").innerHTML = val.nom1;
    document.getElementById("par_depart").innerHTML = val.dateDepart1;
    document.getElementById("par_adultes").innerHTML = val.nbAdultes1;
    document.getElementById("par_prix").innerHTML = val.prix1;
    document.getElementById("par_numVol").innerHTML = val.numVol;



}

function incrementation(){
    
    
    clé = parseInt (localStorage.getItem("clé")) +1
    localStorage.setItem("clé",  clé);

    

}


 

//filtre

var France = ['Lyon','P']
var J = ['Kyoto','Tokyo']
var roumanie = ['Budapest']
var bresil = ['Rio']
let paylist=['France','Bresil','Japon','Roumanie']




 
function text(){


    var papay = document.getElementById('lieu').value
    
   
    
    for (let x of listedest){
        x.show = 1 
        //etape une
        if(papay == 'neutre'){
            x.show =1

        }else{
            if (papay == x.pays){
            x.show=1   
            }else{
            x.show = 0
           
            } 
        }
        
        //etape 2
        if(document.getElementById('dejeuner').checked == true){
            if (x.dejeuner == 'pasdejeuner' ){
            x.show= 0
            }
        }
        else if(document.getElementById('pasdejeuner').checked == true) {
           if(x.dejeuner == 'dejeuner')
           x.show=0
        }
        
        // etape 3
        if (document.getElementById('animauxoui').checked == true)
        { if(x.animaux == 'pasanimaux'){
            x.show = 0
        }
        }
        else if (document.getElementById('animauxnon').checked == true)
        {if (x.animaux == 'animaux'){
            x.show = 0
        }
        
        }
      
        // etape 4
        max = document.getElementById('max').value
        min = document.getElementById('min').value
        if(min!='' | max!=''){
            if(min == ''){ min = 0}

            if(max == ''){max = 9999}
            
            if(x.prix<min | x.prix>max){
                x.show=0
            }
        }   
        // etape 5
        debut = document.getElementById('debut').value
        fin = document.getElementById('fin').value
        if(fin !=''| debut !=''){
            

            if( new Date(debut).getTime()>new Date(x.datedebut).getTime()| new Date(fin).getTime()<new Date(x.datefin).getTime())

            { x.show = 0
    
            }
        }   




    }
    


    if(Lyon.show == 0){
    $('#destination1').hide()
    }else{
    $('#destination1').show()
    }
    if(Paris.show == 0){
    $('#destination2').hide()
    }else{
    $('#destination2').show()
    }
    if(Budapest.show == 0){
    $('#destination3').hide()
    }else{
    $('#destination3').show()
    }

    if(Kyoto.show == 0){
    $('#destination4').hide()
    }else{
    $('#destination4').show()
    }
    if(Tokyo.show == 0){
    $('#destination5').hide()
    }else{
    $('#destination5').show()
    }
    if(Rio.show == 0){
    $('#destination6').hide()
    }else{
    $('#destination6').show()
    }

}

    
// fonction pour remonter en haut
function enhaut(){
    
   
    $(window).scroll(function () { // fonction qui active lors du scrolling
    if ($(this).scrollTop() > 250 ) {  
    $('#enhaut').css('right','10px')
    } else { 
    $('#enhaut').removeAttr( 'style' )
            }
        })
 }
window.onload = enhaut
//fonction titre du formulaire

//change de couleur

function AffichagePanier(){
            for ( let x of localStorage.getItem("listeClé")){
                nb= (localStorage.getItem(String(x)));
                data = JSON.parse(localStorage.getItem(nb));
                let scene = document.querySelector('#panier')
                let clone = document.importNode(scene.content,true)
            let titre = clone.querySelector("p")
            let donnees = clone.querySelectorAll("h1")
    
            titre.setAttribute('id',nb )
            titre.textContent = "destinantion ",nb, " :", data.ville1;
            donnees[0].textContent ="petitdej : ", data.petitdej1;
            donnees[1].textContent = "date de depart : ", data.dateDepart1;
            donnees[2].textContent = "date d'arrivée : ", data.dateArrivee1;
            donnees[3].textContent = " adultes : ", data.nbAdultes1;
            donnees[4].textContent =" enfants : ", data.nbEnfants1;
            donnees[5].textContent ="prix : ", data.prix1;
    
    
            document.body.appendChild(clone)
                                    }
                                

}







             
