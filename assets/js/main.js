
 // Dia da semana, Data completa, Horario.


// Função para obter o nome do dia da semana
function obterDiaSemana() {
    let diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    let data = new Date();
    let diaSemana = data.getDay();
    return diasSemana[diaSemana];
  }

  // Função para obter a data completa
  function obterDataCompleta() {
    let data = new Date();
    let dia = data.getDate();
    let mes = data.toLocaleString('default', { month: 'long' });
    let ano = data.getFullYear();
    return dia + ' de ' + mes + ' de ' + ano;
  }

  // Função para obter o horário atual
  function obterHorarioAtual() {
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    return horas + ':' + minutos + ':' + segundos;
  }

  // Função principal para atualizar o conteúdo do <h1>
  function atualizarConteudo() {
    let diaSemana = obterDiaSemana();
    let dataCompleta = obterDataCompleta();
    let horarioAtual = obterHorarioAtual();

    let h1 = document.getElementById('conteudo');
    h1.innerHTML = diaSemana + ', ' + dataCompleta + ', ' + horarioAtual;
  }

  // Atualizar o conteúdo a cada segundo
  setInterval(atualizarConteudo, 1000);



