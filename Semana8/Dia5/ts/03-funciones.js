var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var retornaSumatoria = function (numeros) {
    var suma = 0;
    for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
        var numero = numeros_1[_i];
        suma += numero;
    }
    return suma;
};
console.log(retornaSumatoria([4, 65, 6]));
// ======================================= //
var imprimirObjeto = function (objeto) {
    for (var key in objeto) {
        console.log("Atributo => " + key + " | valor =>  " + objeto[key]);
    }
};
var objProducto = {
    descripcion: "Leche",
    marca: "Gloria",
    precio: 25.3
};
imprimirObjeto(objProducto);
var json = { "-LtjwrpsdH4frvwsSD_F": { "direccion": "", "lat": "1", "lng": "5", "nombre": "", "nrocanchas": "1", "telefono": "" }, "-Ltjwvd8DBXlj7FfhVLk": { "direccion": "Calle Blondell 105", "lat": "1", "lng": "5", "nombre": "Bola 8", "nrocanchas": "1", "telefono": "974204853" }, "-LtjxVWJCQwDlIMIzaRY": { "direccion": "Dolores", "lat": "4", "lng": "6", "nombre": "Jarawa", "nrocanchas": "4", "telefono": "83948793" }, "-LtjxjTYI9frhgrXrkc6": { "direccion": "slkdfmlskmdflksmd", "lat": "8", "lng": "10", "nombre": "Jarawalskdflsdkflsdkmlskdml", "nrocanchas": "7", "telefono": "83948793" }, "-Ltjy5ZHO21Dta6KYz-w": { "direccion": "slkdfmlskmdflksmdasdas", "lat": "8", "lng": "10", "nombre": "Jarawalskdflsdkflsasdasdasdasdasd", "nrocanchas": "7", "telefono": "83948793" }, "-LtjyuVmi5PibeJj8j4f": { "direccion": "Calle Blondell 105", "lat": "1", "lng": "6", "nombre": "Bola 8", "nrocanchas": "12222", "telefono": "974204853" }, "-LtjzTiHDCt3ZIAj4yGY": { "direccion": "direccion", "lat": "12", "lng": "12", "nombre": "Nombre", "nrocanchas": "3", "telefono": "974204853" }, "-Ltk-Cxv8S8XQW9H7BHu": { "direccion": "Calle Blondell 105", "lat": "4", "lng": "4", "nombre": "Bola 8", "nrocanchas": "6", "telefono": "974204853" }, "-Ltk0JgYiwoCBNOTNj8D": { "direccion": "ppppp", "lat": "4", "lng": "3", "nombre": "pppp", "nrocanchas": "4", "telefono": "974204853" } };
var ejercicio = function (objeto) {
    var newArray = [];
    for (var i in objeto) {
        newArray.push(__assign({ key: i }, objeto[i]));
    }
    console.log(newArray);
};
ejercicio(json);
