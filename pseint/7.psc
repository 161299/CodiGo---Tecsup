Algoritmo sin_titulo
	Escribir"ingrese la poliza (A)Cobertura amplia, daños a terceros(B)"
	Leer poliza
	x=1
	b=1
	c=1
	d=1
	e=1
	f=1
	Mientras x==1 Hacer
		Si poliza=="a" o poliza=="A" o poliza=="b" o poliza=="B" Entonces
			x=x+1
			Si poliza=="a" o poliza=="A" Entonces
				base=1200
				Mientras b==1 Hacer
					Escribir "la persona que conducce tiene habito de beber alcohol?(si o no)"
					Leer alcohol
					Si alcohol=="si" o alcohol=="no" Entonces
						b=b+1
						Si alcohol=="si" Entonces
							base1=(base/100)*10
						SiNo
							base1=0
						Fin Si
					SiNo
						Escribir "ingrese si o no"
					Fin Si
				Fin Mientras
				Mientras c==1 Hacer
					Escribir "la persona que conducce usa lentes?(si o no)"
					Leer lentes
					Si lentes=="si" o lentes=="no" Entonces
						c=c+1
						Si lentes=="si" Entonces
							base2=(base/100)*5
						SiNo
							base2=0
						Fin Si
					SiNo
						Escribir "ingrese si o no"
					Fin Si
				Fin Mientras
				Mientras e==1 Hacer
					Escribir "la persona que conducce  padece alguna enfermedad como deficiencia cardiaca o diabetes?(si o no)"
					Leer enfermedad
					Si enfermedad=="si" o enfermedad=="no" Entonces
						e=e+1
						Si enfermedad=="si" Entonces
							base3=(base/100)*5
						SiNo
							base3=0
						Fin Si
					SiNo
						Escribir "ingrese si o no"
					Fin Si
				Fin Mientras
				Mientras f==1 Hacer
					Escribir "la persona que conducce  tiene mas de 40 años?(si o no)"
					Leer años
					Si años=="si" o años=="no" Entonces
						f=f+1
						Si años=="si" Entonces
							base4=(base/100)*20
						sino 
							base4=(base/100)*10
						Fin Si
					SiNo
						Escribir "ingrese si o no"
					Fin Si
				Fin Mientras
				
			SiNo
				base=950
				Mientras b==1 Hacer
					Escribir "la persona que conducce tiene habito de beber alcohol?(si o no)"
					Leer alcohol
					Si alcohol=="si" o alcohol=="no" Entonces
						b=b+1
						Si alcohol=="si" Entonces
							base1=(base/100)*10
						SiNo
							base1=0
						Fin Si
					SiNo
						Escribir "ingrese si o no"
					Fin Si
				Fin Mientras
				Mientras c==1 Hacer
					Escribir "la persona que conducce usa lentes?(si o no)"
					Leer lentes
					Si lentes=="si" o lentes=="no" Entonces
						c=c+1
						Si lentes=="si" Entonces
							base2=(base/100)*5
						SiNo
							base2=0
						Fin Si
					SiNo
						Escribir "ingrese si o no"
					Fin Si
				Fin Mientras
				Mientras e==1 Hacer
					Escribir "la persona que conducce  padece alguna enfermedad como deficiencia cardiaca o diabetes?(si o no)"
					Leer enfermedad
					Si enfermedad=="si" o enfermedad=="no" Entonces
						e=e+1
						Si enfermedad=="si" Entonces
							base3=(base/100)*5
						SiNo
							base3=0
						Fin Si
					SiNo
						Escribir "ingrese si o no"
					Fin Si
				Fin Mientras
				Mientras f==1 Hacer
					Escribir "la persona que conducce  tiene mas de 40 años?(si o no)"
					Leer años
					Si años=="si" o años=="no" Entonces
						f=f+1
						Si años=="si" Entonces
							base4=(base/100)*20
						sino 
							base4=(base/100)*10
						Fin Si
					SiNo
						Escribir "ingrese si o no"
					Fin Si
				Fin Mientras
			Fin Si
			
		SiNo
			Escribir "incorrecto, ingrese A o B"
		Fin Si
	Fin Mientras
	base=base+base1+base2+base3+base4
	Escribir "ustede debe pagar " base
	
FinAlgoritmo
