console.log(`Trabalhando com condicionais`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

//let new = 2;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) // adicionando um item na lista
const idadeComprador = 18;
const acompanhada = true;
const  temPassagemComprada=true;
console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);
////if (idadeComprador > 18) {
  //  console.log("comprador maior de idade")
  //  listaDeDestinos.splice(1, 1);//removendo item
//
  //  console.log(listaDeDestinos);

//} else if (acompanhada == true) {
   // console.log("comprador está acompanhado")



//}

//else {
    //console.log("Comprador Menor de Idade, Não vender.")
//}
if (idadeComprador >= 18 ||  acompanhada == true) {
    console.log("Boa Viagem")
}
else {
    console.log("Comprador Menor de Idade, Não vender.")
}
console.log("Embarque: \n\n");
if(idadeComprador >=18 && temPassagemComprada==true){
    console.log("Boa Viagem")

}else {
    console.log("Vc não pode embarcar");
}

