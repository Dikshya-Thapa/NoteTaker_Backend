import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import noteRoutes from './src/routes/noteRoutes.js'
import authRoutes from './src/routes/authRoutes.js'
import dbConnection from './src/config/db.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use('/notes', noteRoutes)
app.use('/auth', authRoutes)

await dbConnection()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
}) 