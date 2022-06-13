programa {
	funcao inicio() {
		inteiro x, y
		
		escreva("Entre dois numeros:")
		leia(x)
		leia(y)
		
		escreva(SomaIntervalo(x,y))
	}
	funcao inteiro SomaIntervalo(inteiro x, inteiro y) {

	    inteiro y_PorDois = y/2
	    inteiro xy_Soma = x+y

	    retorne xy_Soma * y_PorDois
	}
}
