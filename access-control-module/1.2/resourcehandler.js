const { resource } = require ("./objects.js");
const mysql = require('mysql');


class resourceHandler{
    constructor(){
        this.connection = mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: 'root',
          database: 'mydb',
        });
      };
  
      insertResourceInDB(resource) {
  
        this.connection.connect((err) => {
          if (err) {
            console.error('Error connecting to the database:', err);
            return;
          }
      
          const query = 'CALL `create_resource` (?, ?)';
          const values = [resource.name, resource.url];
      
          this.connection.query(query, values, (err, results) => {
            if (err) {
              console.error('Error inserting the resource:', err);
            } else {
              console.log('Resource inserted successfully',results);
            }
      
            this.connection.end();
          });
        });
      };
  
      updateResource(resource,id) {
  
        this.connection.connect((err) => {
          if (err) {
            console.error('Error connecting to the database:', err);
            return;
          }
      
          const query = 'CALL `update_resource` (?, ?, ?)';
          const values = [id, resource.name, resource.url];
      
          this.connection.query(query, values, (err, results) => {
            if (err) {
              console.error('Error updating the resource:', err);
            } else {
              console.log('Resource updated successfully',results);
            }
      
            this.connection.end();
          });
        });
      };
  
      deleteResource(id){
        this.connection.connect((err) => {
          if (err) {
            console.error('Error conecting to the database:', err);
            return;
          }
  
          const query = 'CALL `delete_resource` (?)';
          const values = id;
  
          this.connection.query(query, values, (err,results) => {
            if (err) {
              console.error('Error deleting the resource:', err);
            } else {
              console.log('Resource deleted successfully', results);
            }
  
            this.connection.end();
          });
        });
      };
  
      readResource(id){
        this.connection.connect((err) => {
          if (err) {
            console.error('Error conecting to the database:', err);
            return;
          }
  
          const query = 'CALL `read_resource` (?)';
          const values = id;
  
          this.connection.query(query, values, (err,results) => {
            if (err) {
              console.error('Error reading the resource:', err);
            } else {
              console.log('Here is the resource data', results);
            }
  
            this.connection.end();
          });
        });
      };
  
  }
  
  
  module.exports = {resourceHandler};
  
  