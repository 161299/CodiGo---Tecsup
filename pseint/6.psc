Algoritmo m4
	Escribir "ingrese edad"
	Leer edad
	Escribir "ingrese promedio de notas"
	Leer promedio
	Si edad>18 Entonces
		Si promedio>=9 Entonces
			Escribir "su beca es de 2000.00"
		SiNo
			Si promedio>=7.5 Entonces
				Escribir "su beca es de 1000.00"
			SiNo
				Si promedio>=6.0 Entonces
					Escribir "su beca es de 500.00"
				SiNo
					escribir"enviar carta de motivacion"
				Fin Si
			Fin Si
		Fin Si
	SiNo
		Si promedio>=9 Entonces
			Escribir "su beca es de 3000.00"
		SiNo
			Si promedio>=8 Entonces
				Escribir "su beca es de 2000.00"
			SiNo
				Si promedio>=6.0 Entonces
					Escribir "su beca es de 100.00"
				SiNo
					escribir"enviar carta de motivacion"
				Fin Si
			Fin Si
		Fin Si
	Fin Si
FinAlgoritmo
