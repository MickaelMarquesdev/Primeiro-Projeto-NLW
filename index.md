#HTML

# hipertext

#Markup
- TAG
- ATRIBUTOS
#CSS
/* Cascading StyleSheet */
css 
/* declarações*/ 
body {
  background-color: black;
  color: white; 
}
#linguagem

# Javascript
´´´ js  
// variaveis
const mensagem = 'Oi, tudo bem??'
// tipos de dados
  // number
  // string
// funcao
alert(mensagem)

// objeto Javascript
const participante = {
  nome: "Mickael Marques",
  email: "mickaelmarques52@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}

// array
let participantes = [
  {
   nome: "Mickael Marques",
   email: "mickaelmarques52@gmail.com",
   dataInscricao: new Date(2024, 2, 22, 19, 20),
   dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },

  // estrutura de repetição - loop
  for(let participante of participantes) {
  // faça alguma coisa aqui
  // enquanto tiver participante nessa lista
  }


 // substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = output
} 
// para data usar dayjs

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