const Times = ["Palmeiras      ", "Flamengo       ", "Vasco          ", "Corinthians    ", "Cruzeiro       ","Operario       ","Ibis           ","Paysandu       "];
const Pontos = [82, 80, 78, 42, 33, 20, 12, 3];


function mostrarEstoque() {
    console.log("\n--- TABELA DE TIMES E PONTOS ---");
    let contador = 0;
    while (contador < Times.length) {
        console.log(`${Times[contador]} PONTOS: ${Pontos[contador]}`);
        contador++;
    }
}


function adicionarTime(nome, pontuacao) {
    Times.push(nome);
    Pontos.push(pontuacao);
    console.log(`\n[+] ${nome} adicionado à tabela.`);
}


function removerTime(indice) {
    if (indice >= 0 && indice < Times.length) {
        let removido = Times.splice(indice, 1);
        Pontos.splice(indice, 1);
        console.log(`\n[-] ${removido} foi removido da tabela.`);
    } else {
        console.log("\n[!] Erro: Índice não encontrado.");
    }
}




mostrarEstoque();


adicionarTime("Santos         ", 55);


mostrarEstoque();


removerTime(6);


mostrarEstoque();