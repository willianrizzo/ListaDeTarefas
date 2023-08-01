let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");
let contador = 0;

function addTarefa() {
    //pegar valor digitado no input
    let valorInput = input.value;

    // se nao for vazio nem nulo
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        contador++;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
           <div class="checked">
           <span id="icone_${contador}" class="material-symbols-outlined">
           check_circle
           </span>
           </div>
                
            
        </div>

        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>

        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete">Deletar</button>
        </div>
    </div>`

        // adcionar novo item na main

        main.innerHTML += novoItem;

        // zerar campos da main

        input.value = "";
        input.focus();

    }

}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if (classe == "item") {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove("item clicado");
        icone.classList.add("checked");

    

    } else {
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove("item");
        icone.classList.remove("checked");
    }
}

input.addEventListener("keyup", function (event) {

    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();

    }
})