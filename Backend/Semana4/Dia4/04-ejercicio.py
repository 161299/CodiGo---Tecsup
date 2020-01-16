class Producto():
    def __init__(self,fechaCaducidad,nroModelo):
        self.__fechaCaducidad = fechaCaducidad
        self.__nroModelo = nroModelo
    
    def description(self):
        print("fecha de Caducidad: ", self.fechaCaducidad,"\nNro de Modelo", self.nroModelo)

class Frescos(Producto):
    def setfrecos(self,fechaEnvasado,paisOrigen,fechaCaducidad,nroModelo):
        super().__init__(fechaCaducidad,nroModelo)
        self.fechaEnvasado = fechaEnvasado
        self.paisOrigen = paisOrigen

    def description(self):
        print("Fecha de Caducidad: ", self.fechaCaducidad, "\nNroModelo: ", self.nroModelo, "\nFecha de Envase: ", self.fechaEnvasado, "\nPais de Origen: ", self.paisOrigen)

producto = Producto("24 de octubre del 2019","ET322")
producto.description()

fresco = Frescos("12.10.19","Peru","24 de octubre del 2019","ET322")
fresco.description()
