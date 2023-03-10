//Con Promises
function leerCarta(carta) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(carta.split("").reverse().join(""));
        },2000);
    }) ;
    
}

function construirJuguete(instruccion, ){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const juguete = instruccion.split("").reverse().join("");
            if(juguete.includes("madera"))
                return resolve(`${juguete} ,de madera fina`);
            else if (juguete.includes("Xbox"))
                return resolve(`NO puedo eviar tu  ${juguete}`);
            else
            return resolve(`Aqui tienes tu cosa esta  ${juguete}`);
        },5000);
    });
}

function envolverRegalo(juguete){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`${juguete} envuelto`);
        },3000);
    });
}

leerCarta("xbox Series X")
    .then((instruccion) =>{
        return construirJuguete(instruccion);
    })
    .then((juguete) => {
        return envolverRegalo(juguete);
    })
    .then(console.log);