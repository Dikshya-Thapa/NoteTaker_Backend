import express from 'express'
import * as noteController from '../controllers/noteController.js'

const router = express.Router()

router.get('/', noteController.getNotes)

router.post('/', noteController.addNote)

router.put('/:id', noteController.editNote)

router.delete('/:id', noteController.removeNote)

export default router 