import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Note from './note.js'

dotenv.config()

const initialNotes = [
  {
    title: 'Study React',
    body: 'Review React components, props and reusable component structure.',
    category: 'Study',
    date: '22 June',
  },
  {
    title: 'Complete NoteTaker UI',
    body: 'Finish the note cards, search bar and responsive grid layout.',
    category: 'Work',
    date: '23 June',
  },
  {
    title: 'Feed My Dog',
    body: 'Give my dog food and replace the drinking water.',
    category: 'Personal',
    date: '24 June',
  },
  {
    title: 'Prepare Project Presentation',
    body: 'Create slides explaining the NoteTaker components and design.',
    category: 'Study',
    date: '25 June',
  },
]

try {
  await mongoose.connect(process.env.MONGO_URI)

  console.log('MongoDB connected successfully')

  await Note.deleteMany({})

  await Note.insertMany(initialNotes)

  console.log('Initial notes inserted successfully')

  process.exit(0)
} catch (error) {
  console.log(`Error inserting notes: ${error.message}`)

  process.exit(1)
}