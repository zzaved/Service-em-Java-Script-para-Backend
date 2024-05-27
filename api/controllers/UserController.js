module.exports = {
  create: async function (req, res) {
    try {
      const senha = req.body.senha;

      const containsSpecialCharacter = await sails.helpers.containsSpecialCharacter(senha);

      if (!containsSpecialCharacter) {
        return res.status(400).json({
          error: 'A senha deve conter pelo menos um caractere especial.'
        });
      }

      const user = await User.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: senha,
        data_nascimento: req.body.data_nascimento,
        telefone: req.body.telefone,
        cidade: await sails.helpers.consultacep(req.body.cep),
        genero: req.body.genero,
      }).fetch();

      res.cookie('userID', user.id, { maxAge: 60 * 60 * 24 * 7 * 1000 });
      return res.json(user);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
  
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

  populateCustomizacoes: async function (req, res) {
    try {
      const user = await User.findOne({ id: req.params.id }).populate('id_customizacoes');
      return res.json(user);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  login: async function (req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
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