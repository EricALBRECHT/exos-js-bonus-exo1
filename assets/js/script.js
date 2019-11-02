var nombre1 = document.getElementById("Nombre1");
var nombre2 = document.getElementById("Nombre2");

document.getElementById("validButton").addEventListener('click', function() {
   alert(valid(nombre1.value, nombre2.value));
});

function valid(nbre1,nbre2){
    var result ='';
    if (((!isNaN(nbre1)) && (!isNaN(nbre2))) && ((nbre1.trim()!='') && (nbre2.trim()!=''))){
         result = parseInt(nbre1) + parseInt(nbre2);
         result = 'Résultat: ' + result;
    }
    else{
        result = 'Veuillez saisir des nombres !';
    }
    return result;
}