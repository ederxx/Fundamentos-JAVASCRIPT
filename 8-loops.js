
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const acompanhada = true;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";
console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || acompanhada == true;
let contador = 0;
let destinoExiste=false;
while (contador < 3) {


    if (listaDeDestinos[contador] == destino) {
        console.log("Destino Existe");
        destinoExiste = true 
        break;
    }
    contador += 1;
}

console.log("Destino Existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");

}else {
    console.log("Desculpe Tivemos um Erro");
}

for (let i = 0; i < listaDeDestinos.length; i++) {
    if(listaDeDestinos[contador]==destino){
        destinoExiste=true;
    }

    
}
