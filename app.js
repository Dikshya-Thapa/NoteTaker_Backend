import express from 'express'
import noteRoutes from './src/routes/noteRoutes.js'

const app = express()
const PORT = 3001

app.use(express.json())

app.use('/notes', noteRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
}) 