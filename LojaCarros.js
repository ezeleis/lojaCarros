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
    // veiculo.marca = document.getElementById("cars").value;
    veiculo.modelo = document.getElementById("cars").value;
    veiculo.imagem = document.getElementById("imagem").src;
    veiculo.cor = document.getElementById("cor").value;
    veiculo.km = document.getElementById ("km").value;
    veiculo.valor = document.getElementById("valor").value;
    veiculos.push(veiculo);
    console.log('Veiculo cadastrado com suceso!');
    console.log(veiculo);
};

// cadastrarVeiculo("Chevrolet", "Onix", "Localiza", "30000", "40000","branco");
// cadastrarVeiculo("Ford", "Festa", "RentCars", "500000", "30000","cinza");
// cadastrarVeiculo("Renault", "Kwid", "eletrico", "0", "150000","rosa");
// console.log(veiculos);

var objVeiculo = {
    Marca:"",Modelo:"",Veiculo:"",km:"",valor:"",cor:"",
}

function listarVeiculo(){
    for (let v in veiculos){
        let veiculo= veiculos[v];
        objVeiculo.Marca=veiculo[0];
        objVeiculo.Modelo=veiculo[1];
        objVeiculo.Veiculo=veiculo[2];
        objVeiculo.km=veiculo[3];
        objVeiculo.valor=veiculo[4];
        objVeiculo.cor=veiculo[5];
        console.log(objVeiculo);
        return objVeiculo;
    }
}
listarVeiculo();
