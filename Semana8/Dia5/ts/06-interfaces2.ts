interface iVehiculo{
    color: string;
    marca: string;
    modelo: string;
    anio: number;

    imprimirPropiedades(): void;
    retornarAnio(): number;
}

class Vehiculo implements iVehiculo{
    color: string;
    marca: string;
    modelo: string;
    anio: number;

    imprimirPropiedades(){

    }
    retornarAnio() {
        return this.anio
    }

}