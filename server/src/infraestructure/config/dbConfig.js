const config = {
    user: 'your-username',
    password: 'your-password',
    server: 'your-server-name', // Puede ser 'localhost' si trabajas localmente
    database: 'your-database-name',
    options: {
        encrypt: true, // Para conexiones seguras, útil si usas Azure
        trustServerCertificate: true // Puede ser necesario si estás trabajando localmente
    }
};

module.exports = config;
