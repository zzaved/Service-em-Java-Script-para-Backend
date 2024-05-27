/**
 * OportunidadeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  //Função para procurar imagem de capa da oportunidade para exibir na tela principal de oportunidades
  find: async function (req, res) {
    try {
      const foto_oportunidade = await Oportunidade.findOne({ id: req.params.id });
      return res.status(200).send(foto_oportunidade);

    } catch (err) {
      return res.status(500).send(err.message);
    }
  },
  //Função para criar nova oportunidade. Por enquanto não é utilizado
  create: async function (req, res) {
    try {
      const newOpportunity = await Oportunidade.create(
        {
          qtd_vagas: req.body.qtd_vagas,
          descricao: req.body.descricao,
          area_interesse: req.body.area_interesse,
          data_criacao: req.body.data_criacao,
          data_fechamento: req.body.data_fechamento,
          link_foto_destaque: req.body.link_foto_destaque,
        }
      ).fetch();
      return res.status(200).send(newOpportunity);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }

};

