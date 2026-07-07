import initialNotes from '../../data/notes.js'

export function getAllNotes() {
  return initialNotes
}

export function createNote(noteData) {
  const newNote = {
    id: Date.now(),
    ...noteData,
  }

  initialNotes.push(newNote)

  return newNote
}

export function updateNote(id, updatedData) {
  const noteId = Number(id)

  const noteIndex = initialNotes.findIndex((note) => note.id === noteId)

  if (noteIndex === -1) {
    return null
  }

  const updatedNote = {
    ...initialNotes[noteIndex],
    ...updatedData,
    id: noteId,
  }

  initialNotes.splice(noteIndex, 1, updatedNote)

  return updatedNote
}

export function deleteNote(id) {
  const noteId = Number(id)

  const noteIndex = initialNotes.findIndex((note) => note.id === noteId)

  if (noteIndex === -1) {
    return null
  }

  const deletedNote = initialNotes.splice(noteIndex, 1)

  return deletedNote[0]
} 


