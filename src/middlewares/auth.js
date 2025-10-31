const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const authMiddleware = async (req, res, next) => {
  try {
    // Get token from header
    const token = req.headers.authorization?.replace('Bearer ', '')

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No token provided, authorization denied',
      })
    }

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'your-secret-key'
    )

    // Get user from token
    const user = await User.findById(decoded.id)
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found',
      })
    }

    // Attach user to request
    req.user = user
    next()
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid token',
    })
  }
}

module.exports = { authMiddleware }
