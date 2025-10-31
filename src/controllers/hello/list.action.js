/**
 * @swagger
 * /api/hello:
 *   get:
 *     tags: [Hello]
 *     responses:
 *       200:
 *         description: Success
 */
const list = async (req, res) => {
  try {
    return res.status(200).json({ message: 'hello from server' })
  } catch (error) {
    return res.status(500).json({ message: error?.message })
  }
}

module.exports = { list }
