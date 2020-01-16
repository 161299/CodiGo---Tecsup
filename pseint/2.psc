Algoritmo sin_titulo
	Escribir "ingrese la distancia en kilometros"
	Leer distancia
	Escribir "ingrese la velocidad del ciclista en kilometros por hora"
	Leer velocidad
	horas=distancia/velocidad
	minutos=horas-trunc(horas)
	minutos=minutos*60
	segundoss=minutos-trunc(minutos)
	segundoss=segundoss*60
	Escribir "tardada " trunc(horas) " horas, " trunc(minutos) " minutos y "  trunc(segundoss) " segundos"
	
	
FinAlgoritmo
