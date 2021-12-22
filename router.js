'use strict'

module.exports = function(app){
    var controller = require('./controller')
    app.route('/')
    .get(controller.index);

    app.route('/player')
    .get(controller.getPlayer);

    app.route('/player/:id')
    .get(controller.getPlayerbyID);

    app.route('/player/post')
    .post(controller.postPlayer);

    app.route('/player/put/:id')
    .put(controller.putPlayer);

    app.route('/kualitas')
    .get(controller.getKualitas);

    app.route('/team')
    .get(controller.getTeam);


    app.route('/kualitas/post')
    .post(controller.postKualitas);

    app.route('/team/post')
    .post(controller.postTeam);

    app.route('/transfer')
    .get(controller.getTransfer);




}