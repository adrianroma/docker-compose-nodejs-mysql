const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");
console.log('SQL CONFIGURAION: ');
console.log(dbConfig);

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.PORT,
  waitForConnections: true,
  queueLimit: 0
});


async function checkDbConnection() {
  try {


      if(connection){

      connection.getConnection(function(err,connection){
        if (err) {
          console.log('ERROR');
          console.log(err.message);
        
        } else {
          console.log('Database connection pool established with id ' + connection.threadId);
          connection.release();
          
        } }
      )   

    }else{
      console.log('No database connection pool available');
    }

  } catch (err) {
    console.error('Database connection pool failed to connect:', err.message);
  }
}

checkDbConnection();

var storage = {"connection": "default"};

module.exports = { connection, storage}