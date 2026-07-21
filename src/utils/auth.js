import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config({
  path: './.env',
})

const JWT_SECRET = process.env.JWT_SECRET

export function generateToken(user) {
  return jwt.sign(
    {
      userId: user._id,
    },
    JWT_SECRET,
    {
      expiresIn: '7d',
    },
  )
}

export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET)
} 