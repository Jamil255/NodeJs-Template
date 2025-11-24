export const hello = async (req, res) => {
  try {
    return res.status(200).json({ message: 'listing..................' })
  } catch (error) {
    return res.status(500).json({ message: error?.message })
  }
}