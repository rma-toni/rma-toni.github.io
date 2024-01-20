const XMLHttpRequest = require("xmlhttprequest");
const API = "https://api.escuelajs.co/api/v1/products";

function fetchFata(urlApi, callback){
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", urlApi, true);
    xhttp.onredystatechange = function (event){
        if(xhttp.readyState === 4) {
            //0 no se inicializo, 1 loading, 2 se ejecuto, 3 interactuando, 4 completado
            if(xhttp.status === 200){
                //200 solicitud correcta Respuestas informativas (100–199),
                //Respuestas satisfactorias (200–299),
                //Redirecciones (300–399),
                //Errores de los clientes (400–499),
                //y errores de los servidores (500–599).
                callback(null, JSON.parse(xhttp.responseText))
            }
        }else{
            const error = new Error("Error" + urlApi)
            return callback(error, null)
        }
    }
    xhttp.send();
}

function displayMenu(){  
    window.alert("Hola :D");
    /*setTimeout(function (){
        window.alert("Hola :D");
    }, 3000)*/
}