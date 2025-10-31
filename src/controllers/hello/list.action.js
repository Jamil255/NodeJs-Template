const list = async (req, res) => {
  try {
    // console.log(req)
    return res.status(200).json({ message: 'hello from server' })
  } catch (error) {
    return res.status(500).json({ message: error?.message })
  }
}

module.exports = { list }
