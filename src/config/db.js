const { default: mongoose } = require('mongoose')

const dbConnect = async (uri) => {
  try {
    await mongoose.connect(uri)
    console.log('Database connected successfully')
  } catch (error) {
    console.error('Database connection failed:', error)
  }
}

module.exports = dbConnect
