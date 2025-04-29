const { password } = require('../../config/dbConfig');
const db = require('../../config/dbOperations');

async function login(body) {

    let query = 'SELECT * FROM Users WHERE email = @email AND password = @password';
    
    var params = {
        email:  body.email || '' ,          
        password: body.password || ''      
    }

    var result = db.executeQuery(query, params);
    return result;  // Devuelve el primer usuario encontrado
}

module.exports = {
  findUserByUsername,
};
