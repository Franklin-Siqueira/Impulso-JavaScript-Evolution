programa {
	funcao inicio() {
		inteiro x, y
		real notaUm_aluno_A, notaUm_aluno_B, notaDois_aluno_A, notaDois_aluno_B
		
		escreva("Entre o primeiro numero e tecle <enter>:")
		leia(x)
		escreva("Entre o segundo numero e tecle <enter>:")
		leia(y)
		
		escreva("A some do intervalo entre ", x, " e ", y, " e igual a ", SomaIntervalo(x,y))
		//
		escreva("\nAgora entre com a primeira nota do Aluno A: ")
		leia(notaUm_aluno_A)
		escreva("Entre com a segunda nota do Aluno A: ")
		leia(notaDois_aluno_A)
		escreva("Agora entre com a primeira nota do Aluno B: ")
		leia(notaUm_aluno_B)
		escreva("Entre com a segunda nota do Aluno B: ")
		leia(notaDois_aluno_B)
		
		escreva("\n Medias: \n Aluno A: ", MediaAluno(notaUm_aluno_A, notaDois_aluno_A), "\n Aluno B: ", MediaAluno(notaUm_aluno_B, notaDois_aluno_B))
	}
	funcao inteiro SomaIntervalo(inteiro x, inteiro y) {

	    inteiro y_PorDois = y/2
	    inteiro xy_Soma = x+y

	    retorne xy_Soma * y_PorDois
	}
	funcao real MediaAluno(real notaUm, real notaDois){
	    retorne (notaUm + notaDois)/2
	}
}
