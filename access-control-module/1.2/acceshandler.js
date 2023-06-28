const { resource } = require ("./objects.js");
const { group } = require ("./objects.js");
const mysql = require('mysql');


class accesHandler{
  constructor(){
      this.connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'mydb',
      });
    };

    addAccesToGroup(resourceID,groupID) {

      this.connection.connect((err) => {
        if (err) {
          console.error('Error connecting to the database:', err);
          return;
        }
    
        const query = 'CALL `add_acces_to_group` (?, ?)';
        const values = [resourceID, groupID];
    
        this.connection.query(query, values, (err, results) => {
          if (err) {
            console.error('Error grating acces to a resource:', err);
          } else {
            console.log('acces granted succesfully',results);
          }
    
          this.connection.end();
        });
      });
    };

    removeAccesFromGroup(id){
        this.connection.connect((err) => {
          if (err) {
            console.error('Error conecting to the database:', err);
            return;
          }
  
          const query = 'CALL `delete_acces_from_group` (?)';
          const values = id;
  
          this.connection.query(query, values, (err,results) => {
            if (err) {
              console.error('Error deleting the acces to a resource:', err);
            } else {
              console.log('Acces deleted from the group successfully', results);
            }
  
            this.connection.end();
          });
        });
    };

    getGroupAcces(id){
        this.connection.connect((err) => {
          if (err) {
            console.error('Error conecting to the database:', err);
            return;
          }
  
          const query = 'CALL `get_groups_resources` (?)';
          const values = id;
  
          this.connection.query(query, values, (err,results) => {
            if (err) {
              console.error('Error retrieving the groups that have that acces:', err);
            } else {
              console.log('Here are the groups that have acces', results);
            }
  
            this.connection.end();
          });
        });
    };

    getResourceAcces(id){
        this.connection.connect((err) => {
          if (err) {
            console.error('Error conecting to the database:', err);
            return;
          }
  
          const query = 'CALL `get_resource_acces` (?)';
          const values = id;
  
          this.connection.query(query, values, (err,results) => {
            if (err) {
              console.error('Error retrieving the resources that can be accessed:', err);
            } else {
              console.log('Here are the resource that have acces', results);
            }
  
            this.connection.end();
          });
        });
    };

    getUserAcces(id){
      this.connection.connect((err) => {
        if (err) {
          console.error('Error conecting to the database:', err);
          return;
        }

        const query = 'CALL `get_user_resources` (?)';
        const values = id;

        this.connection.query(query, values, (err,results) => {
          if (err) {
            console.error('Error retrieving the resources that can be accessed:', err);
          } else {
            console.log('Here are the resource that have acces', results);
          }

          this.connection.end();
        });
      });
  };


    


}


module.exports = {accesHandler};