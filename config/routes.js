/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  '/oportunidades': { view: 'pages/opportunities' },
  '/login': { view: 'pages/login' },
  '/teste': { view: 'pages/teste' },
  '/signup': { view: 'pages/signup' },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
 //Rotas de manipulação do usuário
  'POST /user': 'UserController.create',
  'PUT /user/:id': 'UserController.updateCustomizacoes',
  'GET /user/:id': 'UserController.populateCustomizacoes',
  'POST /login': 'UserController.login',
  //Rotas de manipulação da customização
  'POST /customizacao': 'CustomizacoesController.create',
  //Rotas de manipulação da oportunidade
  'GET /oportunidades/:id': 'OportunidadeController.find',
  'POST /oportunidades': 'OportunidadeController.create',

};
