import express from 'express'
import * as noteController from '../controllers/noteController.js'
import {
  noteRules,
  noteUpdateRules,
  validateNote,
} from '../validators/noteValidator.js'

const router = express.Router()

router.get('/', noteController.getNotes)

router.post('/', noteRules, validateNote, noteController.addNote)

router.put('/:id', noteUpdateRules, validateNote, noteController.editNote)

router.delete('/:id', noteController.removeNote)

export default router 