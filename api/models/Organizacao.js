/**
 * Organizacao.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nome: { type: 'string', required: true },
    cnpj: { type: 'string' },
    area_interesse: { type: 'string', required: true },
    email: { type: 'string', required: true },
    telefone: { type: 'string', required: true },
    site: { type: 'string' },
    objetivo: { type: 'string', required: true },
    id_oportunidades: {collection: 'oportunidade', via: 'id_organizacao'},
    id_publicacao: {collection: 'publicacao', via: 'id_organizacao'},
    id_inscricao: {collection: 'inscricao', via: 'id_organizacao'},
    id_usuario: {collection: 'user', via: 'id_organizacao'}
  },

};

