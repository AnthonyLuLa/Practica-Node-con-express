//proceo asincrono clase
http = require('http')

console.log("1. Hola");
http.get("http://httpstat.us/200",(res) => {
    console.log (`2. La API devolvio : ${res.statusCde}`)
});
console.log("3. Adios");

/*setTimeout(() => {
    console.log("me has esperado <3");
},5000);*/