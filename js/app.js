function exibeFicha() {
    let section = document.getElementById("exibetA");
    let resultados = "";

    for (let dado of dados) {
        resultados += `
            <tr>
                <td>${dado.treino}</td>
                <td>${dado.exercicio}</td>
                <td>${dado.serie}</td>
                <td>${dado.repeticoes}</td>
                <td>${dado.carga}</td>
            </tr>
        `;
    }

    section.innerHTML = resultados;
}

exibeFicha();