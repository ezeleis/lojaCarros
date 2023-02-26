var marcas = []; 

function cadastrarMarca(){
    let marca = document.getElementById("Marca").value;
    marcas.push(marca);
    console.log("Marca cadastrada com suceso!");
    console.log(marca);
};

// cadastrarMarca("Chevrolet");
// cadastrarMarca("Ford");
// cadastrarMarca("Renault");
// console.log(marcas);

var modelos = [];

function cadastrarModelo(){
    const modelo = {};
    modelo[document.getElementById("cars").value] = document.getElementById("Modelo").value; 
    modelos.push(modelo);
    document.createElement("option")
    console.log("Modelo cadastrado con suceso!");
    console.log(modelo);
}
// cadastrarModelo("Onix");
// cadastrarModelo("Ka");
// cadastrarModelo("Kwid");
// console.log(modelos);

var veiculos = [];

function cadastrarVeiculo(){
    const veiculo = {};
    veiculo.modelo = document.getElementById("cars").value;
    veiculo.imagem = document.getElementById("imagem").src;
    veiculo.cor = document.getElementById("cor").value;
    veiculo.km = document.getElementById ("km").value;
    veiculo.valor = document.getElementById("valor").value;
    veiculos.push(veiculo);
    console.log('Veiculo cadastrado com suceso!');
    console.log(veiculo);
    let veiculosJSON = JSON.stringify(veiculos);
    localStorage.setItem("veiculos",veiculosJSON);
};

//cadastrarVeiculo("Chevrolet", "Onix", "Localiza", "30000", "40000","branco");
// cadastrarVeiculo("Ford", "Festa", "RentCars", "500000", "30000","cinza");
// cadastrarVeiculo("Renault", "Kwid", "eletrico", "0", "150000","rosa");
// console.log(veiculos);



// function listarVeiculos(){
//     let veiculosJSON = document.getElementById("veiculos");
//     let veiculosLista = JSON.parse(veiculosJSON);
//     let objVeiculo = {
//         Marca:"",Modelo:"",Veiculo:"",km:"",valor:"",cor:"",
//     }
//     for (let v in veiculosLista){
//         let veiculoLista= veiculosLista[v];
//         objVeiculo.Marca=veiculoLista[0];
//         objVeiculo.Modelo=veiculoLista[1];
//         objVeiculo.Veiculo=veiculoLista[2];
//         objVeiculo.km=veiculoLista[3];
//         objVeiculo.valor=veiculoLista[4];
//         objVeiculo.cor=veiculoLista[5];
//         console.log(objVeiculo);
//         var card = document.createElement("div");
//         var descricao = document.creatElement("p");
//         document.getElementById("listaCarros").appendChild(card);
//         card.appendChild(descricao);
//     }
// }

function listarVeiculos(){
    let veiculosJSON = localStorage.getItem("veiculos");
    let veiculosParse = JSON.parse(veiculosJSON);
    console.log(veiculosJSON);
    console.log(veiculosParse);
    for (let veiculo in veiculosParse){
       let objVeiculo = (veiculosParse[veiculo]);
       let card = document.createElement("div");
       let descricao = document.createElement("p");
       card.appendChild(descricao);
       document.getElementById("listaCarros").appendChild(card);
    }
}
;
