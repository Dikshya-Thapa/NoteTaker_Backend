import express from 'express'
import * as noteController from '../controllers/noteController.js'
import {
  noteRules,
  noteUpdateRules,
  validateNote,
} from '../validators/noteValidator.js'
import authenticate from '../middleware/auth.js'

const router = express.Router()

router.get('/', noteController.getNotes)

router.post('/', authenticate, noteRules, validateNote, noteController.addNote)

router.put('/:id', authenticate, noteUpdateRules, validateNote, noteController.editNote)

router.delete('/:id', authenticate, noteController.removeNote)

export default router 