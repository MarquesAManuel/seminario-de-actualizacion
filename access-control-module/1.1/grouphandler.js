const { user } = require ("./objects.js");
const { group } = require ("./objects.js");
const mysql = require('mysql');


class groupHandler{
  constructor(){
      this.connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'mydb',
      });
    };

    insertGroupInDB(group) {

      this.connection.connect((err) => {
        if (err) {
          console.error('Error connecting to the database:', err);
          return;
        }
    
        const query = 'CALL `create_group` (?)';
        const values = [group.name];
    
        this.connection.query(query, values, (err, results) => {
          if (err) {
            console.error('Error inserting group:', err);
          } else {
            console.log('group inserted successfully',results);
          }
    
          this.connection.end();
        });
      });
    };

    deleteGroup(id){
        this.connection.connect((err) => {
          if (err) {
            console.error('Error conecting to the database:', err);
            return;
          }
  
          const query = 'CALL `delete_group` (?)';
          const values = id;
  
          this.connection.query(query, values, (err,results) => {
            if (err) {
              console.error('Error deleting the group:', err);
            } else {
              console.log('Group deleted successfully', results);
            }
  
            this.connection.end();
          });
        });
      };

    updateGroup(group,id) {

      this.connection.connect((err) => {
        if (err) {
          console.error('Error connecting to the database:', err);
          return;
        }
    
        const query = 'CALL `update_group` (?, ?, ?)';
        const values = [id,group.name];
    
        this.connection.query(query, values, (err, results) => {
          if (err) {
            console.error('Error updating group:', err);
          } else {
            console.log('Group updated successfully',results);
          }
    
          this.connection.end();
        });
      });
    };

    readGroup(id){
        this.connection.connect((err) => {
          if (err) {
            console.error('Error conecting to the database:', err);
            return;
          }
  
          const query = 'CALL `read_group` (?)';
          const values = id;
  
          this.connection.query(query, values, (err,results) => {
            if (err) {
              console.error('Error reading the group:', err);
            } else {
              console.log('Here is the group data', results);
            }
  
            this.connection.end();
          });
        });
      };

    addUserInGroup(userID,groupID) {

      this.connection.connect((err) => {
        if (err) {
          console.error('Error connecting to the database:', err);
          return;
        }
    
        const query = 'CALL `add_user_to_group` (?, ?)';
        const values = [userID, groupID];
    
        this.connection.query(query, values, (err, results) => {
          if (err) {
            console.error('Error inserting user in the group:', err);
          } else {
            console.log('User inserted successfully in the group',results);
          }
    
          this.connection.end();
        });
      });
    };

    removeUserFromGroup(id){
        this.connection.connect((err) => {
          if (err) {
            console.error('Error conecting to the database:', err);
            return;
          }
  
          const query = 'CALL `delete_user_from_group` (?)';
          const values = id;
  
          this.connection.query(query, values, (err,results) => {
            if (err) {
              console.error('Error deleting the user from the group:', err);
            } else {
              console.log('User deleted from the group successfully', results);
            }
  
            this.connection.end();
          });
        });
      };


    


}


module.exports = {groupHandler};