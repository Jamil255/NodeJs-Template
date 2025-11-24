import mongoose from 'mongoose'

const helloSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
    },
    user: {
      type: String,
      required: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // createdAt and updatedAt
  }
)

const Hello = mongoose.model('Hello', helloSchema)

export default Hello
