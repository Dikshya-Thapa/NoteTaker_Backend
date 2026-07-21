import bcrypt from 'bcrypt'
import User from '../../data/user.js'

export async function createUser(userData) {
  return await User.create(userData)
}

export async function findUserByEmail(email) {
  return await User.findOne({ email })
}

export async function findUserById(id) {
  return await User.findById(id).select('-password')
}

export async function comparePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword)
} 