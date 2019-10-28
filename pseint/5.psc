Algoritmo m3
	Escribir "ingrese su nombre"
	Leer nombre1
	Escribir "ingrese la edad"
	Leer uno
	Escribir "ingrese su nombre"
	Leer nombre2
	Escribir "ingrese la edad"
	Leer dos
	Escribir "ingrese su nombre"
	Leer nombre3
	Escribir "ingrese la edad"
	Leer tres
	Si uno>dos Entonces
		Si dos>tres Entonces
			Si tres<uno Entonces
				Escribir "el menor es: " nombre3
			Fin Si
		SiNo
			Escribir "el menor es: " nombre2
		Fin Si
	SiNo
		Si uno<tres Entonces
			Escribir "el menor es: " nombre1
		SiNo
			Escribir "el menor es: " nombre3
		Fin Si
	Fin Si
FinAlgoritmo
