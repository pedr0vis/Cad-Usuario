// Cria função para validar preenchimento de campos da tela de login

function acessar() {

    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    // Estrutura que verifica se os campos foram preenchidos

    if (!loginSenha || !loginEmail) {

        alert("Por favor, preencha todos os campos!");

    } else {

        window.location.href = 'cadastro.html';

    }

}

// Cria array de forma global
var dadosLista = [];

// Função para salvar usuário
function salvarUser() {

    let nomeUser = document.getElementById('nomeUser').value;

    if (nomeUser) {

        dadosLista.push(nomeUser);
        console.log(dadosLista); // Mostra no console o array
        criaLista();
        document.getElementById('nomeUser').value = "";

    } else {

        alert("Favor preencher o campo nome.");

    }

}

// Função para criar lista do Array
function criaLista() {

    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for(let i=0; i == (dadosLista.length - 1); i++) {

        tabela += "<tr><td>" + dadosLista[i] + "</td><td> <button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)' >Editar</button> <button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button> </td></tr>";
        document.getElementById('tabela').innerHTML = tabela;

    }

}

function editar(i) {

    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
    
}

function excluir(i) {

    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);

}