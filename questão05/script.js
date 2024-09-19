//5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  

function descobrirInterruptores() {
    // Simulando o estado das lâmpadas: todas inicialmente apagadas e frias
    let lampadas = {
      lampada1: { acesa: false, quente: false }, // Controlada por interruptor A
      lampada2: { acesa: false, quente: false }, // Controlada por interruptor B
      lampada3: { acesa: false, quente: false }  // Controlada por interruptor C
    };
  
    // Simulação da primeira ação: ligar o interruptor A por 5 minutos
    // Isso fará com que a lâmpada 1 fique quente
    lampadas.lampada1.acesa = true;   // Lâmpada 1 ligada
    // Simulando 5 minutos - lâmpada 1 fica quente
    setTimeout(() => {
      lampadas.lampada1.acesa = false; // Desliga a lâmpada 1, mas ela continua quente
      lampadas.lampada1.quente = true;
  
      // Segunda ação: ligar o interruptor B
      lampadas.lampada2.acesa = true; // Lâmpada 2 ligada
  
      // Indo para a sala verificar o estado das lâmpadas
      setTimeout(() => {
        // Verificando a lâmpada 2, que está acesa
        if (lampadas.lampada2.acesa) {
          console.log("Lâmpada 2 está acesa: Controlada pelo Interruptor B.");
        }
  
        // Verificando a lâmpada 1, que está apagada mas quente
        if (!lampadas.lampada1.acesa && lampadas.lampada1.quente) {
          console.log("Lâmpada 1 está quente e apagada: Controlada pelo Interruptor A.");
        }
  
        // Verificando a lâmpada 3, que está apagada e fria
        if (!lampadas.lampada3.acesa && !lampadas.lampada3.quente) {
          console.log("Lâmpada 3 está fria e apagada: Controlada pelo Interruptor C.");
        }
      }, 1000);
  
    }, 5000); // Simulando o tempo de 5 minutos
  }
  
  // Executar a função
  descobrirInterruptores();
  