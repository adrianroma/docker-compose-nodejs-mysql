require('dotenv').config();

const axios = require('axios');

const {storage,connection} = require('./db.js');  

var qs = require('qs');

var Promise = require('promise');

const https = require("https");

const fsPromises = require('fs').promises;

var fs = require("fs");


const loadFile = async (data) => {



  let filePath = './public/sample.html';

  try {
    let response = await axios.get(data.url);
    let jsonData = response.data; // The HTML content as a string


   bodyText =  JSON.stringify(jsonData);

    fs.writeFileSync(filePath, bodyText);


  } catch (error) {
    console.error("Error during file download:", error);

    fs.unlink('./public/error.txt', () => { });
    throw error;
    console.error("Error loading the HTML file:", error);
  }

}

const saveLog = async (data) => {

  let dataText = '';

  if (typeof data === 'string') {
    dataText = data;

  } else {

    dataText = JSON.stringify(data);

  }


  let filePath = './public/log.txt';

  try {

    fs.writeFileSync(filePath, data);



  } catch (error) {
    console.error("Error file:", error);


  }

}

const toText = async (data) => {

  let dataText = '';

  if (typeof data === 'string') {
    dataText = data;

  } else {

    dataText = JSON.stringify(data);

  }

  let filePath = './public/log.txt';

  try {

    fs.writeFileSync(filePath, data);

  } catch (error) {
    console.error("Error file:", error);


  }

}


const healthCheck = async (info) => {


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

        connection.query("select * from sample",function(err,rows){
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

}


module.exports = {  loadFile, saveLog, toText,healthCheck}