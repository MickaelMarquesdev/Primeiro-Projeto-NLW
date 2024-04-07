let participantes = [
    {
        nome: "Mickael Marques",
        email: "mickaelmarques52@gmail.com",
        dataInscricao: new Date(2024, 2, 01, 19, 23),
        dataCheckin: new Date(2024, 2, 01, 20, 20)
    },
    {
        nome: "Mayk Brito",
        email: "mayk@gmail.com",
        dataInscricao: new Date(2024, 1, 02, 19, 23),
        dataCheckin: new Date(2024, 1, 05, 20, 20)
    },
    {
        nome: "Ana Silva",
        email: "ana@gmail.com",
        dataInscricao: new Date(2024, 0, 10, 10, 30),
        dataCheckin: new Date(2024, 0, 10, 11, 15)
    },
    {
        nome: "Pedro Oliveira",
        email: "pedro@gmail.com",
        dataInscricao: new Date(2024, 3, 15, 8, 0),
        dataCheckin: new Date(2024, 3, 15, 8, 30)
    },
    {
        nome: "Carolina Santos",
        email: "carolina@gmail.com",
        dataInscricao: new Date(2024, 4, 20, 13, 10),
        dataCheckin: new Date(2024, 4, 20, 14, 0)
    },
    {
        nome: "Rafael Souza",
        email: "rafael@gmail.com",
        dataInscricao: new Date(2024, 5, 25, 9, 20),
        dataCheckin: new Date(2024, 5, 25, 10, 0)
    },
    {
        nome: "Patrícia Lima",
        email: "patricia@gmail.com",
        dataInscricao: new Date(2024, 6, 30, 15, 40),
        dataCheckin: new Date(2024, 6, 30, 16, 30)
    },
    {
        nome: "Felipe Santos",
        email: "felipe@gmail.com",
        dataInscricao: new Date(2024, 7, 5, 12, 15),
        dataCheckin: new Date(2024, 7, 5, 13, 0)
    },
    {
        nome: "Marina Costa",
        email: "marina@gmail.com",
        dataInscricao: new Date(2024, 8, 10, 9, 50),
        dataCheckin: new Date(2024, 8, 10, 10, 30)
    },
    {
        nome: "Lucas Pereira",
        email: "lucas@gmail.com",
        dataInscricao: new Date(2024, 9, 15, 7, 5),
        dataCheckin: new Date(2024, 9, 15, 8, 0)
    }
];

console.log(participantes);


const criarNovoParticipante = (participante) => {
   const dataInscricao = dayjs(Date.now())
   .to(participante.dataInscricao)

   let dataCheckin = dayjs(Date.now())
   .to(participante.dataCheckin)

   // condicional
   if(participante.dataCheckin == null) {
    dataCheckin = `
     <button
       data-email="${participante.email}"
       onclick="fazerCheckIn(event)"
     >
       Confirmar check-in
     </button>
    `
   }

   return `
    <tr>
    <td>
     <strong>
         ${participante.nome}
     </strong>
     <br>
     <small>
         ${participante.email}
     </small>
     </td>
  <td>${dataInscricao}</td>
  <td>${dataCheckin}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
    let output = ""
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }

  document
  .querySelector('tbody')
  .innerHTML = output
} 

atualizarLista(participantes)

const adicionarParticipante = (event) => {
    event.preventDefault()

    const dadosDoFormulario = new FormData(event.target)

    const participante = {
        nome: dadosDoFormulario.get('nome'),
        email: dadosDoFormulario.get('email'),
        dataInscricao: new Date(),
        dataCheckin: null
    }

    // verificar se o participante já existe
    const participanteExiste = participantes.find(
        (p) => p.email == participante.email
    )

    if(participanteExiste) {
        alert('Email já cadastrado')
        return
    }
    participantes = [participante, ...participantes]
    atualizarLista(participantes)

    //limpar formulario
    event.target.querySelector('[name="nome"]').value = ""
    event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  // confirmar se realmente que o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
    if(confirm(mensagemConfirmacao) == false) {
        return
    }
  
  // encontrar o participante dentro da lista
  const participante = participantes.find(
    (p) => p.email == event.target.dataset.email
  ) 
  
  // atualizar o check-in do participante
  participante.dataCheckin = new Date()

  // atualizar a lista de participantes
  atualizarLista(participantes)
}