//3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
//Ao final do processamento, qual será o valor da variável SOMA?


int INDICE = 12, SOMA = 0, K = 1;

enquanto K < INDICE faça {
    K = K + 1;
    SOMA = SOMA + K;
}
imprimir(SOMA);

//1ª iteração: K = 2, SOMA = 0 + 2 = 2
//2ª iteração: K = 3, SOMA = 2 + 3 = 5
//3ª iteração: K = 4, SOMA = 5 + 4 = 9
//4ª iteração: K = 5, SOMA = 9 + 5 = 14
//5ª iteração: K = 6, SOMA = 14 + 6 = 20
//6ª iteração: K = 7, SOMA = 20 + 7 = 27
//7ª iteração: K = 8, SOMA = 27 + 8 = 35
//8ª iteração: K = 9, SOMA = 35 + 9 = 44
//9ª iteração: K = 10, SOMA = 44 + 10 = 54
//10ª iteração: K = 11, SOMA = 54 + 11 = 65
//11ª iteração: K = 12, SOMA = 65 + 12 = 77


//Resultado final:
//Ao final do processamento, quando K atingir 12, o loop para, e o valor de SOMA será 77.
//Portanto, o valor final da variável SOMA é 77.