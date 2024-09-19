//2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

//IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;


function countA(str) {
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a' || str[i] === 'A') {
        count++;
      }
    }
  
    if (count > 0) {
      return `A letra 'a' aparece ${count} vezes na string.`;
    } else {
      return `A letra 'a' não foi encontrada na string.`;
    }
  }
  
  // Exemplo de uso:
  const texto = "JavaScript é uma linguagem fantástica!";
  console.log(countA(texto));
  