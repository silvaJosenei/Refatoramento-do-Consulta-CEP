//Preencher o formulário com os dados de retorno da API
function preencherFormulario(endereco){
    document.getElementById("endereco").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
    document.getElementById("ibge").value = endereco.ibge;
    document.getElementById("ddd").value = endereco.ddd;
    document.getElementById("siafi").value = endereco.siafi;
}

//Verifica se o que foi digitado pelo usuário é somente números
function eNumero(numero){
    return /^[0-9]+$/.test(numero);
}

//Verifica se o CEP possui tamanho 8 e só possui números
function cepValido(cep){
    return cep.length == 8 && eNumero(cep);
}

//Função para pesquisar o CEP via API
async function pesquisarCEP(){
    const cep = document.getElementById("cep").value.replace("-","");
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        console.log(endereco);
        if (endereco.hasOwnProperty("erro")) {
            document.getElementById("endereco").value = "CEP não encontrado!"
        } else {
            preencherFormulario(endereco);
        }
    } else {
        document.getElementById("endereco").value = "CEP incorreto"
    }
}

document.getElementById("cep").addEventListener("focusout",pesquisarCEP);

// Limpar campos quando erro
var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => limparCampos()); 
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

function limparCampos() {
        cidade.value = "";
        estado.value = "";
        bairro.value = "";
        ibge.value = "";
        ddd.value = "";
        siafi.value = "";
}

// Botão limpar
function limparFormulario(endereco) {
    document.getElementById("cep").value = ("");
    document.getElementById("endereco").value = ("");
    document.getElementById("bairro").value = ("");
    document.getElementById("cidade").value = ("");
    document.getElementById("estado").value = ("");
    document.getElementById("ibge").value = ("");
    document.getElementById("ddd").value = ("");
    document.getElementById("siafi").value = ("");
}

document.getElementById("cep").addEventListener("focusout", pesquisarCEP);
const btn = document.getElementById("Limpar")
btn.addEventListener("click", limparFormulario)

function alert(endereco) {
    alert("cep:", cep)
}

const btnn = document.getElementById("Salvar");
btnn.addEventListener("click", alert)