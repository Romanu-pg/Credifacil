const sql = require('mssql');
const config = require('./dbConfig');

// Función para conectar a la base de datos
const connectToDatabase = async () => {
    try {
        const pool = await sql.connect(config);
        return pool;
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        throw error;
    }
};

// Función para ejecutar una consulta SQL
const executeQuery = async (query, params, conf) => {
	const pool = new sql.ConnectionPool(conf);
	try {

        const pool = await connectToDatabase();
        const request = await pool.request();
		Object.entries(params).forEach(([key, value]) => {
			request.input(key, value);
		});
		let result = await pool.request().query(query);
		if (typeof result != 'undefined') {
			return { status: 'ok', data: result.recordsets.length > 1 ? result.recordsets : result.recordsets[0] };
		} else {
			throw { status: 'error', data: 'Error en la consulta de datos. Recordsets' };
		}
	} catch (error) {
		throw { status: 'error', data: error };
	} finally {
		pool.close();
	}
};

// Función para ejecutar un procedimiento almacenado
const executeStoredProcedure = async (procedureName, params = []) => {
    try {
        const pool = await connectToDatabase();
        const result = await pool.request();

        // Agregar parámetros para el procedimiento almacenado
        params.forEach((param) => {
            result.input(param.name, param.type, param.value);
        });

        const procedureResult = await result.execute(procedureName);
        return procedureResult.recordset;
    } catch (error) {
        console.error('Error al ejecutar el procedimiento almacenado:', error);
        throw error;
    }
};

module.exports = {
    executeQuery,
    executeStoredProcedure
};
