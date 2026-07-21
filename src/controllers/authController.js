import * as authModel from '../models/authModel.js'
import { generateToken } from '../utils/auth.js'

export async function register(req, res) {
  try {
    const { name, email, password } = req.body

    const existingUser = await authModel.findUserByEmail(email)

    if (existingUser) {
      return res.status(409).json({
        message: 'Email already exists',
      })
    }

    const user = await authModel.createUser({
      name,
      email,
      password,
    })

    const token = generateToken(user)

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    res.status(500).json({
      message: 'Failed to register user',
      error: error.message,
    })
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body

    const user = await authModel.findUserByEmail(email)

    if (!user) {
      return res.status(401).json({
        message: 'Invalid email or password',
      })
    }

    const isValid = await authModel.comparePassword(password, user.password)

    if (!isValid) {
      return res.status(401).json({
        message: 'Invalid email or password',
      })
    }

    const token = generateToken(user)

    res.status(200).json({
      message: 'User logged in successfully',
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    res.status(500).json({
      message: 'Failed to login',
      error: error.message,
    })
  }
} 