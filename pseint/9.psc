Algoritmo sin_titulo
	Escribir "ingrese la cantidad de alumnos"
	Leer cantidad
	Si cantidad>100 Entonces
		Escribir "se cobrara 20 soles por alumno"
	SiNo
		Si cantidad>=50 y cantidad<100 Entonces
			Escribir "se cobrara 35 soles por alumno"
		SiNo
			Si cantidad>=20 y cantidad<50 Entonces
				Escribir "se cobrara 40 soles por alumno"
			SiNo
				Si cantidad<20 Entonces
					Escribir "se cobrara 70 soles por alumno"
				Fin Si
			Fin Si
		Fin Si
	Fin Si
FinAlgoritmo
