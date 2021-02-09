class affichage{
    constructor(pays,ville,description,id,imag,atri,id2,temperature){

        this.pays = pays;
        this.ville = ville;
        this.description = description;
        this.id = id
        this.imag = imag
        this.atri = atri
        this.id2 = id2
        this.temperature = temperature
        
    }
}

//recuperation api meteo

listevilleid=['2996944','6618620',"7284827",'1857910','1850147','3451190']
// listevilleid = ['Lyon','Paris','Budapest','Kyoto','Tokyo','Rio']


var callbackSucess = function(data) {
    
    let temps = data.main.temp 
    console.log(temps)
    sessionStorage.setItem('temps0',temps)
}
var url ='https://api.openweathermap.org/data/2.5/weather?id=2996944&APPID=9799d5155b52c6eda5d620b8f140519a'
$.get(url,callbackSucess).done(function(){
})
    .fail(function(){
        alert('error');
    })
    .always(function(){
    });
    var callbackSucess = function(data) {
    
        let temps = data.main.temp 
        console.log(temps)
        sessionStorage.setItem('temps1',temps)
 
    
    }

var url ='https://api.openweathermap.org/data/2.5/weather?id=6618620&APPID=9799d5155b52c6eda5d620b8f140519a'
$.get(url,callbackSucess).done(function(){
})
    .fail(function(){
        alert('error');
    })
    .always(function(){
    });
    var callbackSucess = function(data) {
    
        let temps = data.main.temp 
        console.log(temps)
        sessionStorage.setItem('temps2',temps)
    
        
    }
var url ='https://api.openweathermap.org/data/2.5/weather?id=7284827&APPID=9799d5155b52c6eda5d620b8f140519a'
$.get(url,callbackSucess).done(function(){
 })
    .fail(function(){
        alert('error');
    })
    .always(function(){
    });
    var callbackSucess = function(data) {
    
        let temps = data.main.temp 
        console.log(temps)
        sessionStorage.setItem('temps3',temps)

            
    }
    var url ='https://api.openweathermap.org/data/2.5/weather?id=1857910&APPID=9799d5155b52c6eda5d620b8f140519a'
$.get(url,callbackSucess).done(function(){
})
    .fail(function(){
        alert('error');
    })
            .always(function(){
});
var callbackSucess = function(data) {
    
    let temps = data.main.temp 
    console.log(temps)
    sessionStorage.setItem('temps4',temps)

                
}
var url ='https://api.openweathermap.org/data/2.5/weather?id=1850147&APPID=9799d5155b52c6eda5d620b8f140519a'
$.get(url,callbackSucess).done(function(){
                })
    .fail(function(){
        alert('error');
    })
    .always(function(){
    });
    var callbackSucess = function(data) {
    
        let temps = data.main.temp 
        console.log(temps)
        sessionStorage.setItem('temps5',temps)
        
                    
    }
var url ='https://api.openweathermap.org/data/2.5/weather?id=3451190&APPID=9799d5155b52c6eda5d620b8f140519a'
$.get(url,callbackSucess).done(function(){
})
    .fail(function(){
        alert('error');
})
    .always(function(){
    });




TemLyon =parseInt(sessionStorage.getItem('temps0'))-273

TempParis = parseInt(sessionStorage.getItem('temps1'))-273
TempBudapest = parseInt(sessionStorage.getItem('temps2'))-273
TempKyoto = parseInt(sessionStorage.getItem('temps3'))-273
TempTokyo = parseInt(sessionStorage.getItem('temps4'))-273
TempRio = parseInt(sessionStorage.getItem('temps5'))-273



var Lyon =  new affichage('France','Lyon','voyage a Lyon avec petit dejeuner inclue,animaux non autorisés du 12 decembre 2019 au 12 janvier 2020','destination1','../image/Lyon.jpg','image de la ville de Lyon',1,'3°C')
var Paris = new affichage('France','Paris','voyage a Paris pas de petit dejeuner , animaux autorisés, du 7 octobre 2019 au 12 janvier 2020','destination2','../image/Paris.jpg','image de la ville de Paris',2,"2°C")
var Budapest = new affichage('Hongrie','Budapest ','voyage a Budapest avec petit dejeuner et animaux autorisés du 17 janvier 2020 au 19 mars 2020','destination3','../image/Budapest.jpg','image de Budapest',3,"0°C")
var Kyoto = new affichage('Japon','Kyoto','voyage a Kyoto, petit dejeuner non inclue , animaux autorisés , du 20 novembre 2019 au 30 novembre 2019','destination4','../image/Kyoto.jpg','image de la ville de Kyoto',4,"10°C")
var Tokyo = new affichage('Japon','Tokyo','voyage a Tokyo avec dejeuner , animaux non autorisés du premier juin 2020 au 12 juin 2020','destination5','../image/Tokyo.jpeg','image de la ville de Tokyo',5,"11°C")
var Rio = new affichage('Bresil','Rio','voyage a Rio sans petit dejeuner sans animaux du 2 janvier 2020 au 7 fevrier 2020','destination6','../image/Rio.jpg','image de la ville de Rio',6,"25°C")

listdest = [Lyon,Paris,Budapest,Kyoto,Tokyo,Rio]
var connex =  sessionStorage.getItem('identifiant')
listidentifi = ['polo','gauthier']

// fonction affichant les destination seulement si l utilisateur est connecter 


for(let y of listidentifi){
    if(y == connex){
        for ( let x of listdest){
            let scene = document.querySelector('#fond')
            let clone = document.importNode(scene.content,true)
        let images = clone.querySelector('img')
        let conents = clone.querySelector('.goin')
        let intern = clone.querySelectorAll("p")
        let aattrib = clone.querySelectorAll("a")

        conents.setAttribute("id",x.id)
        intern[0].textContent = x.ville
        intern[0].setAttribute('class',x.pays)
        intern[1].textContent = x.description
        aattrib[1].textContent = x.temperature
        aattrib[1].setAttribute('class','temperature')
        intern[2].setAttribute('id',x.ville)
        images.setAttribute('class','area')
        images.setAttribute('src',x.imag)
        images.setAttribute('alt',x.atri)
        aattrib[0].setAttribute('href','formulaire.html?id='+x.id2)


        document.body.appendChild(clone)
                                }
    if(connex == 'erreur'){ 
        alert('identifiant ou mot de passe non valide')
                        }
                }
}