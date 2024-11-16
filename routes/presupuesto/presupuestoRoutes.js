import { Router } from 'express';
import verifyToken from '../middleware.js';
import {
    listarTodospresupuesto,
    listarpresupuestoPorId,
    crearpresupuesto,
    actualizarpresupuesto,
    eliminarpresupuesto
} from '../../controllers/presupuesto/presupuestoController.js';

const presupuestoRouter = Router();

presupuestoRouter.use(verifyToken);

presupuestoRouter.get('/', listarTodospresupuesto);
presupuestoRouter.get('/:id', listarpresupuestoPorId);

presupuestoRouter.post('/', crearpresupuesto);
presupuestoRouter.put('/:id', actualizarpresupuesto);
presupuestoRouter.delete('/:id', eliminarpresupuesto);

export default presupuestoRouter;
