const {user, userData, group} = require('./objects.js')
const {userHandler} = require('./userhandler.js')
const {groupHandler} = require('./grouphandler.js');

function testApp()
{
    let myUserhandler =  new userHandler();

    let myGrouphandler =  new groupHandler();

    user.username = "pedrito",
    user.password = "12345",

    userData.name = "Kevin",
    userData.surname = "Taylor",
    userData.dni = "42354009",
    userData.telephone = "2234561788",
    userData.gender = "Male",
    userData.address = "9 de julio 5650",
    userData.email = "kevintylo@hotmail.com",
    userData.isActive = true,

    group.name =  "Textil"

    //myUserhandler.insertUserInDB(user);
    //updateUser(user,2)
    //myUserhandler.showAllUsers();
    //myUserhandler.deleteUser(3);
    //myUserhandler.showAllUsers();
    //myUserhandler.insertUserDataInDB(user,1);
    //myUserhandler.readUser(1);
    //myUserhandler.getGroupMembership(1);


    //myGrouphandler.insertGroupInDB(group);
    //myGrouphandler.deleteGroup(2);
    //myGrouphandler.updateGroup(group,1);
    //myGrouphandler.readGroup(1);
    //myGrouphandler.addUserInGroup(2,1);
    //myGrouphandler.removeUserFromGroup(1,2);


}

testApp();