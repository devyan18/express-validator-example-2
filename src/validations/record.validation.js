import { body } from "express-validator"

export const createRecordValidation = [
    body('param1').notEmpty().withMessage('el parametro 1 es requerido'),
    body('param2').notEmpty().withMessage('el parametro 1 es requerido'),
]

export const updateRecordValidation = [
    body('param1').optional().isNumeric(),
]