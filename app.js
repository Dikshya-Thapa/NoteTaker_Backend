import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import noteRoutes from './src/routes/noteRoutes.js'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use('/notes', noteRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
}) 