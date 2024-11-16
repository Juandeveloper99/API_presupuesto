import {
  listarTodosPresupuestoQuery,
  listarPresupuestoPorIdQuery,
  crearPresupuestoQuery,
  actualizarPresupuestoQuery,
  eliminarPresupuestoQuery
} from "../../db/presupuesto/presupuestoQueries";

/**
 * Obtener todos los presupuesto de la base de datos
 */
const listarTodosPresupuesto = async (req, res) => {
  // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
  // Try -> intentar
  // Catch -> capturar el error
  try {
    //  Ejecutar la consulta en la base de datos
    const presupuesto = await listarTodosPresupuestoQuery();
    res.json(presupuesto);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Obtener el libro con el ID especificado en la query / url
 * @param {*} req 
 * @param {*} res 
 */

const listarPresupuestoPorId = async (req, res) => { 
  try {
    //  Ejecutar la consulta en la base de datos
    const presupuesto = await listarPresupuestoPorIdQuery(req.params.id);
    res.json(presupuesto);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Crear un Presupuesto
 */
const crearPresupuesto = async (req, res) => {
  console.log(req.body)
  try {
      const datosPresupuesto = req.body;
      const resultado = await crearPresupuestoQuery(datosPresupuesto);
      res.json({ mensaje: 'Presupuesto creado con éxito', id: resultado.insertId });
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
 * Actualizar los datos de un libro
 */
const actualizarPresupuesto = async (req, res) => {
  try {
      const id = req.params.id;
      const datosPresupuesto = req.body;
      const resultado = await actualizarPresupuestoQuery(id, datosPresupuesto);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Presupuesto actualizado con éxito', id: id });
      } else {
          res.status(404).json({ mensaje: 'Presupuesto no encontrado' });
      }
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
 * Eliminar un libro
 */
const eliminarPresupuesto = async (req, res) => {
  try {
      const id = req.params.id;
      const resultado = await eliminarPresupuestoQuery(id);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Presupuesto eliminado con éxito' });
      } else {
          res.status(404).json({ mensaje: 'Presupuesto no encontrado' });
      }
  } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el Presupuesto', error: error.message });
  }
};

export {
  listarTodosPresupuesto,
  listarPresupuestoPorId,
  crearPresupuesto,
  actualizarPresupuesto,
  eliminarPresupuesto,
};
