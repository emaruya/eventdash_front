function gerarRelatorio(){
    var dtIni = document.getElementById("txtDataIni").value;
    var dtFim = document.getElementById("txtDataFim").value;

    var url = "http://localhost:8080/eventos?ini=" + dtIni + "&fim=" + dtFim;

    fetch(url).then(res => res.json()).then(listaEventos => preencheTabela(listaEventos));

}

function preencheTabela(listaEventos){
    var strTabela = `<table class="table">
                        <thread>
                            <th class="text-center"> Número de Sequência </th>
                            <th class="text-center"> Data </th>
                            <th class="text-center"> Alarme </th>
                            <th class="text-center"> Hotname </th>
                            <th class="text-center"> IP </th>
                        </thread>
                        
                        <tbody>`;

    // agora eu preciso percorrer a lista e preencher cada uma das linhas
    for (i=0; i < listaEventos.length; i++) {
        let evento = listaEventos[i];

        strTabela = strTabela + `<tr>
                                    <td class="text-center"> ${evento.numSeq} </td>
                                    <td class="text-center"> ${evento.dataEvento} </td>
                                    <td class="text-center"> ${evento.alarme.nome} </td>
                                    <td class="text-center"> ${evento.equipamento.hostname} </td>
                                    <td class="text-center"> ${evento.equipamento.ipaddr} </td>
                                </tr>`;
    }

    strTabela = strTabela + `</tbody>
                            </table>`;

    document.getElementById("relatorio").innerHTML = strTabela;
}