// Ex 1 - Crie uma função para cadastrar Marca de Veículos

// Ex 2 - Crie uma função para cadastrar Modelo de Veículos

// Ex 3 - Crie função para cadastrar Veículo

// Ex 4 - Crie uma função para listar os veículos cadastrados.

// Ex 5 - Crie uma página somente com um menu com as seguintes opcões (Início, Marca, Modelo, Veículo)

// Ex 6 - Crie uma página para cadastro de Marca de veículos

// Ex 7 - Crie uma página para cadastro de Modelo de veículos

// Ex 8 - Crie uma página para cadastro de veículo

// Ex 9 - Crie uma página index para mostrar a listagem dos veículos

// Ex 10 - Persistir informações no Localstorage e algumas melhorias

// var marcas = []; 

// function cadastrarMarca(marca){
//     marcas.push(marca);
//     console.log("Marca cadastrada com suceso!");
//     console.log(marca);
//     return;
//}

// cadastrarMarca("Chevrolet");
// cadastrarMarca("Ford");
// cadastrarMarca("Renault");
// console.log(marcas);

// var modelos = [];

// function cadastrarModelo(modelo){
//     modelos.push(modelo);
//     console.log("Modelo cadastrado con suceso!")
//     console.log(modelo);
//     return;
// }
// // cadastrarModelo("Onix");
// // cadastrarModelo("Ka");
// // cadastrarModelo("Kwid");
// // console.log(modelos);

var veiculos = [];

function cadastrarVeiculo(marca, modelo, veiculo, km, valor, cor){
    veiculos.push([marca, modelo, veiculo, km, valor, cor]) ;
    console.log('Veiculo cadastrado com suceso!');
}

cadastrarVeiculo("Chevrolet", "Onix", "Localiza", "30000", "40000","branco");
cadastrarVeiculo("Ford", "Festa", "RentCars", "500000", "30000","cinza");
cadastrarVeiculo("Renault", "Kwid", "eletrico", "0", "150000","rosa");

function listarVeiculo(){
    for (let veiculo in veiculos){
        
        console.log(veiculo);
    }
}
listarVeiculo();