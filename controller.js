'use strict'

var mysql = require('mysql')

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database: 'player'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('Connect');
});

var response = require('./response');
//  

exports.index = function(req,res){
    response.ok('Success' ,res)
};

exports.getPlayer = function(req,res){
    conn.query('SELECT id_player , nama , usia , kualitas.kualitas , gaji , team.team , kontrak FROM player JOIN kualitas JOIN team where player.id_kualitas = kualitas.id_kualitas AND player.id_team = team.id_team' , function (error, rows,fields){
            if (error) {
                connection.log(error);
            } else {
                response.ok(rows, res);
            }  
        });
};

exports.getPlayerbyID = function(req,res){
    let id = req.params.id;
    conn.query('SELECT * FROM player where id_player = ?' ,[id] , function (error, rows,fields){
            if (error) {
                connection.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};


exports.postPlayer = function(req,res){
    var nama = req.body.nama;
    var usia = req.body.usia;
    var id_kualitas = req.body.id_kualitas;
    var gaji = req.body.gaji;
    var id_team = req.body.id_team;
    var kontrak = req.body.kontrak;

    conn.query('INSERT INTO player (nama,usia,id_kualitas,gaji,id_team,kontrak) VALUES(?,?,?,?,?,?)',
        [nama,usia,id_kualitas,gaji,id_team,kontrak],
        function(error,rows,fields){
            if(error) throw error;

            response.ok('Berhasil Insert Data',res)
        });
};

exports.putPlayer = function(req,res){
    var id = req.params.id
    var nama = req.body.nama;
    var usia = req.body.usia;
    var id_kualitas = req.body.id_kualitas;
    var gaji = req.body.gaji;
    var id_team = req.body.id_team;
    var kontrak = req.body.kontrak;
    
    conn.query('UPDATE player SET nama = ? , usia = ? , id_kualitas = ? , gaji = ? , id_team = ?, kontrak = ? where id_player = ?',
        [nama,usia,id_kualitas,gaji,id_team,kontrak,id],
        function(error,rows,fields){
            if(error) throw error;

            response.ok('Berhasil Update Data' ,res)
        });
};;

exports.deletePlayerbyid = function(req,res){
    let id = req.params.id;
    conn.query('DELETE FROM player where id_player = ?',[id],
    function (error,rows,fields){
        if(error) throw error;
        
        response.ok('Berhasil Menghapus Data',res);
    }) ;
};


exports.getKualitas = function(req,res){
    conn.query('SELECT * FROM kualitas' , function (error, rows,fields){
            if (error) {
                connection.log(error);
            } else {
                response.ok(rows, res);
            }  
        });
};

exports.postKualitas = function(req,res){
    var kualitas = req.body.kualitas;
    

    conn.query('INSERT INTO kualitas (kualitas) VALUES(?)',
        [kualitas],
        function(error,rows,fields){
            if(error) throw error;

            response.ok('Berhasil Insert Data',res)
        });
};

exports.getTeam = function(req,res){
    conn.query('SELECT * FROM team' , function (error, rows,fields){
            if (error) {
                connection.log(error);
            } else {
                response.ok(rows, res);
            }  
        });
};

exports.postTeam = function(req,res){
    var team = req.body.team;
    var liga = req.body.liga;

    conn.query('INSERT INTO team (team,liga) VALUES(?,?)',
        [team,liga],
        function(error,rows,fields){
            if(error) throw error;

            response.ok('Berhasil Insert Data',res)
        });
};

exports.getTransfer = function(req,res){
    conn.query('SELECT id_transfer , player.nama , harga from transferlist JOIN player where transferlist.id_player = player.id_player' , function (error, rows,fields){
            if (error) {
                connection.log(error);
            } else {
                response.ok(rows, res);
            }  
        });
};



