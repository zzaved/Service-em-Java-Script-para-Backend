/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const { create, update } = require("sails-postgresql");

module.exports = {
  //Função para criar um novo usuário
  create: async function (req, res) {
    try {
      const user = await User.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        data_nascimento: req.body.data_nascimento,
        telefone: req.body.telefone,
        //Utiliza o CEP para buscar cidade do usuário
        cidade: await sails.helpers.consultacep(req.body.cep),
        genero: req.body.genero,
      }).fetch();
      //Cria um cookie no navegador do usuário com seu ID; Utilizar no futuro para manter usuário logado
      res.cookie('userID', user.id, { maxAge: 60 * 60 * 24 * 7 * 1000 });
      return res.json(user);
      //Retorna a mensagem de erro caso haja algum problema com as verificações acima
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
  //Função para adicionar as informações de customização do usuário
  updateCustomizacoes: async function (req, res) {
    try {
      const user = await User.update({ id: req.params.id }, {
        id_customizacoes: req.body.id_customizacao,
      }).fetch();
      return res.json(user);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
  //Função para retornar as informações do usuário junto das customizações
  populateCustomizacoes: async function (req, res) {
    try {
      //Acha e retorna as informações do usuário junto das customizações
      const user = await User.findOne({ id: req.params.id }).populate('id_customizacoes');
      return res.json(user);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
  login: async function (req, res) {
    try {
      user = await User.findOne({email: req.body.email})
      if (user.senha === req.body.senha) {
        res.cookie('userID', user.id, { maxAge: 60 * 60 * 24 * 7 * 1000 });
        return res.status(201).json(user);
      } else {
        return res.status(401).send('Senha incorreta');
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send("Não foi possível realizar o login");
    }

  }
};

