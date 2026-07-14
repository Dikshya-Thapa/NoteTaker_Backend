import Note from '../../data/note.js'

export async function getAllNotes() {
  const notes = await Note.find().sort({ createdAt: -1 })

  return notes
}

export async function createNote(noteData) {
  const newNote = await Note.create(noteData)

  return newNote
}

export async function updateNote(id, updatedData) {
  const updatedNote = await Note.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  })

  return updatedNote
}

export async function deleteNote(id) {
  const deletedNote = await Note.findByIdAndDelete(id)

  return deletedNote
} 