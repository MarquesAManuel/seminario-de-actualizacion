const { user } = require ("./objects.js");
const { userData } = require ("./objects.js");
const mysql = require('mysql');


class userHandler{
  constructor(){
      this.connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'mydb',
      });
    };

    insertUserInDB(user) {

      this.connection.connect((err) => {
        if (err) {
          console.error('Error connecting to the database:', err);
          return;
        }
    
        const query = 'CALL `create_user` (?, ?)';
        const values = [user.username, user.password];
    
        this.connection.query(query, values, (err, results) => {
          if (err) {
            console.error('Error inserting user:', err);
          } else {
            console.log('User inserted successfully',results);
          }
    
          this.connection.end();
        });
      });
    };

    updateUser(user,id) {

      this.connection.connect((err) => {
        if (err) {
          console.error('Error connecting to the database:', err);
          return;
        }
    
        const query = 'CALL `update_user` (?, ?, ?)';
        const values = [id,user.username, user.password];
    
        this.connection.query(query, values, (err, results) => {
          if (err) {
            console.error('Error inserting user:', err);
          } else {
            console.log('User inserted successfully',results);
          }
    
          this.connection.end();
        });
      });
    };

    insertUserDataInDB(userData,id) {

      this.connection.connect((err) => {
        if (err) {
          console.error('Error connecting to the database:', err);
          return;
        }
    
        const query = 'CALL `load_user_data` (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [id, userData.name, userData.surname, userData.dni, userData.telephone, userData.gender, userData.address, userData.email, userData.isActive];
    
        this.connection.query(query, values, (err, results) => {
          if (err) {
            console.error('Error inserting user data:', err);
          } else {
            console.log('User data inserted successfully',results);
          }
    
          this.connection.end();
        });
      });
    };

    deleteUser(id){
      this.connection.connect((err) => {
        if (err) {
          console.error('Error conecting to the database:', err);
          return;
        }

        const query = 'CALL `delete_user` (?)';
        const values = id;

        this.connection.query(query, values, (err,results) => {
          if (err) {
            console.error('Error deleting the user:', err);
          } else {
            console.log('User deleted successfully', results);
          }

          this.connection.end();
        });
      });
    };

    readUser(id){
      this.connection.connect((err) => {
        if (err) {
          console.error('Error conecting to the database:', err);
          return;
        }

        const query = 'CALL `read_user` (?)';
        const values = id;

        this.connection.query(query, values, (err,results) => {
          if (err) {
            console.error('Error reading the user:', err);
          } else {
            console.log('Here is the user data', results);
          }

          this.connection.end();
        });
      });
    };

    showAllUsers(){
      this.connection.connect((err) => {
        if (err) {
          console.error('Error conecting to the database:', err);
          return;
        }

        this.connection.query('SELECT * FROM users', (err, results) => {
          if (err) {
            console.error('Error executing query: ', err);
            return;
          }
          console.log('User:', results);

          this.connection.end();
        });
      });
    };

    getGroupMembership(id){
      this.connection.connect((err) => {
        if (err) {
          console.error('Error conecting to the database:', err);
          return;
        }

        const query = 'CALL `get_groups_membership` (?)';
        const values = id;

        this.connection.query(query, values, (err,results) => {
          if (err) {
            console.error('Error reading the user memberships:', err);
          } else {
            console.log('Here is the user memberships data', results);
          }

          this.connection.end();
        });
      });
    };


}


module.exports = {userHandler};







