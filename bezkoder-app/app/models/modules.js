
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

        connection.query("CREATE TABLE modules (  id INT PRIMARY KEY AUTO_INCREMENT,  module VARCHAR(255),  descripcion TEXT,  active BOOLEAN,  client VARCHAR(255));",function(err,rows){
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

const createModule = async (data) => {


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

        connection.query("INSERT INTO modules (module, descripcion, active, client) VALUES (?, ?, ?, ?)", [data.module, data.descripcion, data.active, data.client], function(err,rows){
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
    console.error("Error during module creation:", error);

    fs.unlink('./public/error.txt', () => { });
    throw error;
    console.error("Error loading the HTML file:", error);
  }

}

const deleteModule = async (data) => {


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

        connection.query("DELETE FROM modules WHERE id = ?", [data.id], function(err,rows){
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
    console.error("Error during module deletion:", error);

    fs.unlink('./public/error.txt', () => { });
    throw error;
    console.error("Error loading the HTML file:", error);
  }

}

const searchModule = async (data) => {


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

        connection.query("SELECT * FROM modules WHERE client = ?", [data.client], function(err,rows){
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
    console.error("Error during module search:", error);

    fs.unlink('./public/error.txt', () => { });
    throw error;
    console.error("Error loading the HTML file:", error);
  }

}

module.exports = {  generateTable, createModule, deleteModule, searchModule}