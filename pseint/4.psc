Algoritmo m2
	Escribir "ingrese su presupuesto"
	Leer presupuesto
	Si presupuesto>250.00 Entonces
		Escribir "su regalo ideal es un anillo"
	SiNo
		Si presupuesto>=101.00 y presupuesto<=250.00 Entonces
			Escribir "su regalo ideal son las flores"
		SiNo
			Si presupuesto>=11.00 y presupuesto<=100.00 Entonces
				Escribir "su regalo ideal son los chocolates"
			SiNo
				Si presupuesto>0 y presupuesto<=10 Entonces
					Escribir "su regalo ideal son las flores"
				SiNo
					Escribir "usted no puede comprar nada"
				Fin Si
			Fin Si
		Fin Si
	Fin Si
	
FinAlgoritmo
