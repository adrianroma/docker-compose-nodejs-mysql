
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

        connection.query("CREATE TABLE servers (  id INT PRIMARY KEY AUTO_INCREMENT,  server VARCHAR(255),  client VARCHAR(255));",function(err,rows){
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

const createService = async (data) => {



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

        connection.query("INSERT INTO servers (server, client) VALUES (?, ?)", [data.server, data.client], function(err,rows){
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
    console.error("Error during service creation:", error);

    fs.unlink('./public/error.txt', () => { });
    throw error;
    console.error("Error loading the HTML file:", error);
  }



}

const deleteService = async (data) => {



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

        connection.query("DELETE FROM servers WHERE id = ?", [data.id], function(err,rows){
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
    console.error("Error during service deletion:", error);

    fs.unlink('./public/error.txt', () => { });
    throw error;
    console.error("Error loading the HTML file:", error);
  }



}

const searchService = async (data) => {



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

        connection.query("SELECT * FROM servers WHERE client = ?", [data.client], function(err,rows){
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
    console.error("Error during service search:", error);

    fs.unlink('./public/error.txt', () => { });
    throw error;
    console.error("Error loading the HTML file:", error);
  }



}

module.exports = {  generateTable, createService, deleteService, searchService}