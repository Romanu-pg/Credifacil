const db = require('../../config/dbOperations');

async function login(body) {
    const query = 'SELECT * FROM Users WHERE email = @email AND password = @password';

    const params = {
        email: body.email || '',
        password: body.password || ''
    };

    try {
        const result = await db.executeQuery(query, params);
        return result;
    } catch (error) {
        console.error('Error en login:', error);
        throw error;
    }
}

module.exports = {
    login
};