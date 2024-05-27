/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nome: { type: 'string', required: true },
    email: { type: 'string', required: true},
    senha: { type: 'string', required: true},
    data_nascimento: { type: 'string', required: true},
    telefone:{ type: 'string', required: true},
    cidade: { type: 'string', required: true},
    genero: { type: 'string'},
    area_interesse: { type: 'string'},
    motivacao:{ type: 'string'}, 
    publicar_perfil: { type: 'boolean', defaultsTo: false},
    id_customizacoes: {collection: 'customizacao', via: 'id_usuario'},
    id_oportunidades: {collection: 'oportunidade', via: 'id_usuario'},
    id_publicacao: {collection: 'publicacao', via: 'id_usuario'},
    id_organizacao: {model: 'organizacao', unique: true},
    id_inscricao: {collection: 'inscricao', via: 'id_usuario'},
  },

};

