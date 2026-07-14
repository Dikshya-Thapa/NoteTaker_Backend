import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    body: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: ['Personal', 'Work', 'Study'],
      default: 'Personal',
    },

    date: {
      type: String,
      default: 'Today',
    },
  },
  {
    timestamps: true,
  },
)

const Note = mongoose.model('Note', noteSchema)

export default Note 