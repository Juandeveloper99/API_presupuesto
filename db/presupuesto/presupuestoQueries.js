import config from '../../config.js';

// Helper function to handle query results
const respuesta = (err, result, resolve, reject) => {
    if (err) {
        console.log(err);
        reject(err);
    } else {
        resolve(result);
    }
};
/**
 * Carga la lista de presupuesto
 */
const listarTodospresupuestoQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM presupuesto', (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Buscar un libro por su ID (llave primaria)
 */
const listarLibroPorIdQuery = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM presupuesto WHERE id_presupuesto = ? LIMIT 1', [id], (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};


/**
 * Guardar un nuevo libro
 */
const crearLibroQuery = async (libro) => {
    const { nombre, fecha_de_publicacion, libro_Genero, id_libro_autor } = libro;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO presupuesto (ingreso_mes, ingreso_año, usuario_presupuesto) VALUES (?, ?, ?)';
        config.query(sql, [nombre, fecha_de_publicacion, libro_Genero, id_libro_autor], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Actualizar un libro por su ID
 */
const actualizarLibroQuery = (id, libro) => {
    const { nombre, fecha_de_publicacion, libro_Genero, id_libro_autor } = libro;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE presupuesto SET ingreso_mes = ?, ingreso_año = ?, usuario_presupuesto = ? WHERE id_presupuesto = ?';
        config.query(sql, [nombre, fecha_de_publicacion, libro_Genero, id_libro_autor, id], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Eliminar un libro por su ID
 */
const eliminarLibroQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM presupuesto WHERE id_presupuesto = ?';
        config.query(sql, [id], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodospresupuestoQuery,
    listarLibroPorIdQuery,
    crearLibroQuery,
    actualizarLibroQuery,
    eliminarLibroQuery   
}
