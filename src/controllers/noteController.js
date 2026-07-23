import * as noteModel from '../models/noteModel.js'

export async function getNotes(req, res) {
  try {
    const notes = await noteModel.getAllNotes(req.user.userId)

    return res.json(notes)
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to get notes',
      error: error.message,
    })
  }
}

export async function addNote(req, res) {
  try {
    const { title, body, category, date } = req.body

    const newNote = await noteModel.createNote({
      user: req.user.userId,
      title,
      body,
      category,
      date: date || 'Today',
    })

    return res.status(201).json({
      message: 'Note added successfully',
      note: newNote,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to add note',
      error: error.message,
    })
  }
}

export async function editNote(req, res) {
  try {
    const { id } = req.params

    const updatedNote = await noteModel.updateNote(
      id,
      req.user.userId,
      req.body,
    )

    if (!updatedNote) {
      return res.status(404).json({
        message: 'Note not found',
      })
    }

    return res.json({
      message: 'Note updated successfully',
      note: updatedNote,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to update note',
      error: error.message,
    })
  }
}

export async function removeNote(req, res) {
  try {
    const { id } = req.params

    const deletedNote = await noteModel.deleteNote(id, req.user.userId)

    if (!deletedNote) {
      return res.status(404).json({
        message: 'Note not found',
      })
    }

    return res.json({
      message: 'Note deleted successfully',
      note: deletedNote,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to delete note',
      error: error.message,
    })
  }
} 