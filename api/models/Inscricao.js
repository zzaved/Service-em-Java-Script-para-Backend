/**
 * Inscricao.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nome: { type: 'string', required: true },
    email: { type: 'string', required: true},
    objetivo:{ type: 'string', required: true},
    link:{ type: 'string'},
    id_usuario: {model: 'user'},
    id_organizacao: {model: 'organizacao'},
    id_oportunidade: {model: 'oportunidade'},


  },

};

