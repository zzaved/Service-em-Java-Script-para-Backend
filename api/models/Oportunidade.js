/**
 * Oportunidade.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    qtd_vagas: { type: 'number', required: true },
    descricao: { type: 'string', required: true},
    area_interesse: { type: 'string', required: true},
    data_criacao: { type: 'string', required: true},
    data_fechamento: { type: 'string', required: true},
    link_foto_destaque: { type: 'string'},
    id_usuario:{model: 'user'},
    id_organizacao:{model: 'organizacao'},
    id_inscricao: {collection: 'inscricao', via: 'id_oportunidade'},

  },

};

