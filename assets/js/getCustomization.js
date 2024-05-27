//Interação do botão que retorna as customizações do usuário
var verificarCustomizacao = document.getElementById('verificarCustomizacao').addEventListener('click', function () {
  console.log('verificarCustomizacao')
  //Busca pela informação com o ID do usuário
  fetch('http://localhost:1337/user/' + userID, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },

  }).then(response => {
    if (!response.ok) {
      //Se a resposta for negativa, retorna uma mensagem de erro
      return response.text().then(text => { throw new Error(text) })
    }
    //Se a resposta for positiva, retorna o JSON da resposta
    return response.json()
    //Imprime a resposta no console para debugging
  }).then(data => { console.log(data.id_customizacoes[0]) })
  //Verifica se tem algum erro e retorna a mensagem de erro no console
    .catch((err) => console.log(err.message));
})
