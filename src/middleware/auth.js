import { verifyToken } from '../utils/auth.js'

const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      return res.status(401).json({
        error: 'Unauthorized',
      })
    }

    const token = authHeader.split(' ')[1]

    if (!token) {
      return res.status(401).json({
        error: 'Token missing',
      })
    }

    const decodedUser = verifyToken(token)

    req.user = decodedUser

    next()
  } catch (error) {
    return res.status(401).json({
      error: 'Invalid token',
    })
  }
}

export default authenticate 