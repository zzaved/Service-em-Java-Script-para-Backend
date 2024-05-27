//Cria interação com botão de criar conta
var createButton = document.getElementById('submit').addEventListener('click', function () {
  //Começa criando uma entrada de organização
  fetch('http://localhost:1337/customizacao', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      //Exeplos de entradas
      acessorio_pernas: 'calca',
      acessorio_cabeca: 'bone',
      acessorio_rosto: 'oculos',
      userID: userID
    })
  }).then(response => {
    //Se a resposta não for positiva, retorna uma mensagem de erro redirecionada do controller
    if (!response.ok) {
      return response.text().then(text => { throw new Error(text); });
    }
    //Se tudo der certo, retorna o JSON da resposta
    return response.json();
  })
    .then(data => {
      //Imprime a resposta no console para debugging
      console.log(data);

    })
    //Verifica se tem algum erro
    .catch((err) => console.log(err.message))
    //Depois de criar a customização, cria o usuário
    .then(function () {
      fetch('http://localhost:1337/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: document.getElementById('nome').value,
          email: document.getElementById('email').value,
          senha: document.getElementById('senha').value,
          //Coleta a data de nascimento e transforma em Unix Timestamp
          data_nascimento: Math.floor(new Date(document.getElementById('birthday').value).getTime() / 1000),
          telefone: document.getElementById('telefone').value,
          //Coleta o CEP para verificação de cidade
          cep: document.getElementById('cep').value


        })
      }).then(response => {
        //Se a resposta não for positiva, retorna uma mensagem de erro redirecionada do controller
        if (!response.ok) {
          return response.text().then(text => { throw new Error(text); });
        }
        //Se tudo der certo, retorna o JSON da resposta
        return response.json();
      })
        .then(data => {
          //Imprime a resposta no console para debugging e substitui um texto antes vazio com uma mensagem de agradecimento e confirmação
          document.getElementById('result').innerText = "Obrigado por se registrar " + data.nome;
          console.log(data);
        })
        //Verifica se tem algum erro e retorna a mensagem de erro no mesmo texto vazio
        .catch((err) => document.getElementById('result').innerText = err.message)
        .then(function () {
          //Verifica o ID do usuário e atualiza o perfil com o id da customização
          userID = getCookie('userID');
          fetch('http://localhost:1337/user/' + userID, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id_customizacao: userID
            })
          }).then(response => {
            //Se a resposta não for positiva, retorna uma mensagem de erro redirecionada do controller
            if (!response.ok) {
              return response.text().then(text => { throw new Error(text); });
            }
            //Se tudo der certo, retorna o JSON da resposta
            return response.json();
          })
          //Imprime a resposta no console para debugging
            .then(data => {

              console.log(data);
            })
            //Verifica se tem algum erro e retorna a mensagem de erro no mesmo texto vazio
            .catch((err) => document.getElementById('result').innerText = err.message);
        }

        );
    });


}
);
