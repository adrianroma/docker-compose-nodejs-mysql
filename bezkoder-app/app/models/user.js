
const {storage,connection} = require('./db.js');  

const generateTable = async (data) => {


  try {

      let result = [];

      console.log('STORAGE: ');
      console.log(storage);


      result =  await new Promise((resolve, reject) => {

        
         connection.getConnection(function(err,connection){
        if (err) {
          console.log(err);
           reject(err);
          
        }   

        console.log('connected as id ' + connection.threadId);

        connection.query("CREATE TABLE users (  id INT PRIMARY KEY AUTO_INCREMENT,  name VARCHAR(255),  email VARCHAR(255) UNIQUE,  password VARCHAR(255),  client VARCHAR(255));",function(err,rows){
            connection.release();
            if(!err) {
                resolve(rows);
            }else{
                reject(err);
            }           
        });

         connection.on('error', function(err) {      
              reject(err);
             
           });
         });

        });
     
  return { status:'successful',result: result };


  } catch (error) {
    console.error("Error during file download:", error);

    fs.unlink('./public/error.txt', () => { });
    throw error;
    console.error("Error loading the HTML file:", error);
  }

}

const createUser = async (data) => {


  try {

      let result = [];

      console.log('STORAGE: ');
      console.log(storage);


      result =  await new Promise((resolve, reject) => {

        
         connection.getConnection(function(err,connection){
        if (err) {
          console.log(err);
           reject(err);
          
        }   

        console.log('connected as id ' + connection.threadId);

        connection.query("INSERT INTO users (name, email, password, client) VALUES (?, ?, ?, ?)", [data.name, data.email, data.password, data.client], function(err,rows){
            connection.release();
            if(!err) {
                resolve(rows);
            }else{
                reject(err);
            }           
        });

         connection.on('error', function(err) {      
              reject(err);
             
           });
         });

        });
     
  return { status:'successful',result: result };


  } catch (error) {
    console.error("Error during user creation:", error);

    fs.unlink('./public/error.txt', () => { });
    throw error;
    console.error("Error loading the HTML file:", error);
  }

}

const checkPassword = async (data) => {


  try {

      let result = false;

      console.log('STORAGE: ');
      console.log(storage);


      result =  await new Promise((resolve, reject) => {

        
         connection.getConnection(function(err,connection){
        if (err) {
          console.log(err);
           reject(err);
          
        }   

        console.log('connected as id ' + connection.threadId);

        connection.query("SELECT password FROM users WHERE email = ?", [data.email], function(err,rows){
            connection.release();
            if(!err) {
                if(rows.length > 0 && rows[0].password === data.password) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }else{
                reject(err);
            }           
        });

         connection.on('error', function(err) {      
              reject(err);
             
           });
         });

        });
     
  return { status:'successful',result: result };


  } catch (error) {
    console.error("Error during password check:", error);

    fs.unlink('./public/error.txt', () => { });
    throw error;
    console.error("Error loading the HTML file:", error);
  }

}

const deleteUser = async (data) => {


  try {

      let result = [];

      console.log('STORAGE: ');
      console.log(storage);


      result =  await new Promise((resolve, reject) => {

        
         connection.getConnection(function(err,connection){
        if (err) {
          console.log(err);
           reject(err);
          
        }   

        console.log('connected as id ' + connection.threadId);

        connection.query("DELETE FROM users WHERE id = ?", [data.id], function(err,rows){
            connection.release();
            if(!err) {
                resolve(rows);
            }else{
                reject(err);
            }           
        });

         connection.on('error', function(err) {      
              reject(err);
             
           });
         });

        });
     
  return { status:'successful',result: result };


  } catch (error) {
    console.error("Error during user deletion:", error);

    fs.unlink('./public/error.txt', () => { });
    throw error;
    console.error("Error loading the HTML file:", error);
  }

}

const checkPasswordAndModulesAndServices = async (data) => {


  try {

      let result = [];

      console.log('STORAGE: ');
      console.log(storage);


      result =  await new Promise((resolve, reject) => {

        
         connection.getConnection(function(err,connection){
        if (err) {
          console.log(err);
           reject(err);
          
        }   

        console.log('connected as id ' + connection.threadId);

        connection.query("SELECT users.*, modules.id AS module_id, modules.module, modules.descripcion, modules.active, servers.id AS server_id, servers.server FROM users LEFT JOIN modules ON users.client = modules.client LEFT JOIN servers ON users.client = servers.client WHERE users.email = ? AND users.password = ?", [data.email, data.password], function(err,rows){
            connection.release();
            if(!err) {
                resolve(rows);
            }else{
                reject(err);
            }           
        });

         connection.on('error', function(err) {      
              reject(err);
             
           });
         });

        });
     
  return { status:'successful',result: result };


  } catch (error) {
    console.error("Error during password check with modules and services:", error);

    fs.unlink('./public/error.txt', () => { });
    throw error;
    console.error("Error loading the HTML file:", error);
  }

}

module.exports = {  generateTable, createUser, checkPassword, deleteUser, checkPasswordAndModulesAndServices}