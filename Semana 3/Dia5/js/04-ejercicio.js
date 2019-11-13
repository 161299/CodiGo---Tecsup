class Playa {
    nombre;
    nroEspacios;
    vehiculos;
    constructor(nom, nro) {
      this.nombre = nom;
      this.nroEspacios = nro;
      this.vehiculos = [];
    }
    agregarVehiculo(){
        if(this.nroEspacios > this.vehiculos.lenght){

            let vehTemp = {
                placa: "",
                marca: "",
                modelo: "",
            }
        
            vehTemp.placa = prompt("ingrese placa del vehiculo");
            vehTemp.marca = prompt("Ingrese marca del vehiculo");
            vehTemp.modelo= prompt("Ingrese el modelo del vehiculo");

            this.vehiculos.push(vehTemp)

        }else{
            alert("Ya no hay espacios")
        }
};
  
}

let objPlaya = new 
  