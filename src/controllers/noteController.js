import * as noteModel from '../models/noteModel.js'

export function getNotes(req, res) {
  const notes = noteModel.getAllNotes()

  return res.json(notes)
}

export function addNote(req, res) {
  const { title, body, category, date } = req.body

  if (!title || !body || !category) {
    return res.status(400).json({
      message: 'Title, body and category are required',
    })
  }

  const newNote = noteModel.createNote({
    title,
    body,
    category,
    date: date || 'Today',
  })

  return res.status(201).json({
    message: 'Note added successfully',
    note: newNote,
  })
}

export function editNote(req, res) {
  const { id } = req.params

  const updatedNote = noteModel.updateNote(id, req.body)

  if (!updatedNote) {
    return res.status(404).json({
      message: 'Note not found',
    })
  }

  return res.json({
    message: 'Note updated successfully',
    note: updatedNote,
  })
}

export function removeNote(req, res) {
  const { id } = req.params

  const deletedNote = noteModel.deleteNote(id)

  if (!deletedNote) {
    return res.status(404).json({
      message: 'Note not found',
    })
  }

  return res.json({
    message: 'Note deleted successfully',
    note: deletedNote,
  })
} 