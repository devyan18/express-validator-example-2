import { Router } from 'express';
import { createRecordCtrl } from '../controllers/record.controller.js';
import { validationSchema } from '../middlewares/validator.schema.js';
import { createRecordValidation } from '../validations/record.validation.js';

const recordRoutes = Router();

recordRoutes.post('/', createRecordValidation, validationSchema, createRecordCtrl)

export { recordRoutes }