import Note from '../../data/note.js'

export async function getAllNotes(userId) {
  const notes = await Note.find({ user: userId }).sort({ createdAt: -1 })

  return notes
}

export async function createNote(noteData) {
  const newNote = await Note.create(noteData)

  return newNote
}

export async function updateNote(id, userId, updatedData) {
  const updatedNote = await Note.findOneAndUpdate(
    { _id: id, user: userId },
    updatedData,
    {
      new: true,
      runValidators: true,
    },
  )

  return updatedNote
}

export async function deleteNote(id, userId) {
  const deletedNote = await Note.findOneAndDelete({ _id: id, user: userId })

  return deletedNote
} 