//Con asyncawait
function leerCarta(carta) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(carta.split("").reverse().join(""));
        },2000);
    }) ;
    
}

function construirJuguete(instruccion){
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

(async function main() {
    const instruccion = await leerCarta("carrito de madera");
    const juguete = await construirJuguete(instruccion);
    const regalo = await envolverRegalo(juguete,instruccion);
    console.log(regalo);
})();
