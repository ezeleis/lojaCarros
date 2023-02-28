//Ex 1
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


//Ex2
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


//Ex 3
var veiculos = [];

function cadastrarVeiculo(){
    const veiculo = {};
    veiculo.modelo = document.getElementById("cars").value;
    veiculo.imagem = document.getElementById("imagem").value;
    veiculo.cor = document.getElementById("cor").value;
    veiculo.km = document.getElementById ("km").value;
    veiculo.valor = document.getElementById("valor").value;
    veiculo.foiVendido = false;
    veiculos.push(veiculo);
    console.log('Veiculo cadastrado com suceso!');
    console.log(veiculo);
    let veiculosJSON = JSON.stringify(veiculos);
    localStorage.setItem("veiculos",veiculosJSON);
};

//Ex 4
//cadastrarVeiculo("Chevrolet", "Onix", "Localiza", "30000", "40000","branco");
// cadastrarVeiculo("Ford", "Festa", "RentCars", "500000", "30000","cinza");
// cadastrarVeiculo("Renault", "Kwid", "eletrico", "0", "150000","rosa");
// console.log(veiculos);



function listarVeiculos(){
    let veiculosJSON = localStorage.getItem("veiculos");
    let veiculosParse = JSON.parse(veiculosJSON);
    console.log(veiculosJSON);
    console.log(veiculosParse);
    for (let veiculo in veiculosParse){
        let objVeiculo = (veiculosParse[veiculo]);
        let card = document.createElement("div");
        card.classList.add("cartaoVeiculo");
        card.id = `${objVeiculo.modelo}${veiculo}`;
        
        let descricao = document.createElement("p");
        let modelo = document.createElement("h1");
        modelo.innerHTML = objVeiculo.modelo;
        let km = document.createElement("h2");
        km.innerHTML =`KM ${objVeiculo.km} rodados` ;
        let valor = document.createElement("h2");
        valor.innerHTML = `R$${objVeiculo.valor}`;
        let cor = document.createElement("h2");
        cor.innerHTML = objVeiculo.cor;
        //Bonus Track "botao vendido"
        let foiVendido = document.createElement("button");
        foiVendido.innerHTML = "Vendido";
        foiVendido.onclick = ()=>objVeiculo.foiVendido=true;
        foiVendido.onclick= ()=>document.getElementById(`${objVeiculo.modelo}${veiculo}`).style.opacity= "0.5";

        card.appendChild(descricao);
        card.appendChild(foiVendido);
        descricao.appendChild(modelo);
        descricao.appendChild(km);
        descricao.appendChild(valor);
       
        
        //Gambiarra para imagem (imposivel acesar diretorio local desde o navegador)
        document.getElementById("listaCarros").appendChild(card);
        if (objVeiculo.modelo == "Chevrolet Onix"){
            let imagem = document.createElement("img");
            imagem.src = "descarga.jpeg";
            descricao.appendChild(imagem);
        }
        else if(objVeiculo.modelo == "Ford Ka"){
            let imagem = document.createElement("img");
            imagem.src = "Ford Ka.jpeg";
            descricao.appendChild(imagem);
        }
        else if(objVeiculo.modelo == "Renault Kwid"){
            let imagem = document.createElement("img");
            imagem.src = "Kwid.jpeg";
            descricao.appendChild(imagem);
        }

    }

}

