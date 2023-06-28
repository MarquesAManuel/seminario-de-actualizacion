const {user, userData, group, resource} = require('./objects.js')
const {userHandler} = require('./userhandler.js')
const {groupHandler} = require('./grouphandler.js');
const {resourceHandler} = require('./resourcehandler.js');
const {accesHandler} = require('./acceshandler.js');

//Nuestra testApp para revisar que todo funcione correctamente

function testApp()
{
    //Los constructores de los diferentes handlers que vamos a usar
    let myUserhandler =  new userHandler();

    let myGrouphandler =  new groupHandler();

    let myResourceHandler = new resourceHandler();

    let myAccesHandler = new accesHandler();


    //Unos objetos mock para probar los metodos,editar cualquier valor segun crea correspondiente para testear////
    user.id = 1,
    user.username = "pedrito",
    user.password = "12345",

    userData.id = 1,
    userData.name = "Kevin",
    userData.surname = "Taylor",
    userData.dni = "42354009",
    userData.telephone = "2234561788",
    userData.gender = "Male",
    userData.address = "9 de julio 5650",
    userData.email = "kevintylo@hotmail.com",
    userData.isActive = true,

    group.id = 1
    group.name =  "Textil",

    resource.id = 1,
    resource.name = 'Leer usuario',
    resource.url = 'localhost/seminario/test/userhanlder/readuser'

    //Los diferentes metodos,para probar cualquier metodo descomentarlo y editar los valores correspondientes para testarlo//

    //myUserhandler.insertUserInDB(user);
    //myUserhandler.updateUser(user,2);
    //myUserhandler.showAllUsers();
    //myUserhandler.deleteUser(user.id);
    //myUserhandler.showAllUsers();
    //myUserhandler.insertUserDataInDB(userData,1);
    //myUserhandler.readUser(user.id);
    //myUserhandler.getGroupMembership(1);


    //myGrouphandler.insertGroupInDB(group);
    //myGrouphandler.deleteGroup(group.id);
    //myGrouphandler.updateGroup(group,1);
    //myGrouphandler.readGroup(group.id);
    //myGrouphandler.addUserInGroup(user.id,group.id);
    //myGrouphandler.removeUserFromGroup(user.id,group.id);


    //myResourceHandler.insertResourceInDB(resource);
    //myResourceHandler.readResource(resource.id);
    //myResourceHandler.updateResource(resource,2);
    //myResourceHandler.deleteResource(2);

    //myAccesHandler.addAccesToGroup(2,2);
    //myAccesHandler.removeAccesFromGroup(1);
    //myAccesHandler.getGroupAcces(1);
    //myAccesHandler.getResourceAcces(2)
    //myAccesHandler.getUserAcces(user.id);


}

testApp();