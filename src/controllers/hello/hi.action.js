/**
 * @swagger
 * /api/hello/hi:
 *   get:
 *     tags: [Hello]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Unauthorized
 */

const hello = async (req, res) => {
  try {
    return res.status(200).json({ message: 'listing..................' })
  } catch (error) {
    return res.status(500).json({ message: error?.message })
  }
}
module.exports = { hello }
