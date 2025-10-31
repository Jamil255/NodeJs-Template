const { asyncHandler } = require('../../middlewares/asyncHandler')
const { list } = require('./list.action')
const { hello } = require('./hi.action')
module.exports = {
  '/': {
    get: {
      action: asyncHandler(list),
    },
  },
  '/hi': {
    get: {
      action: asyncHandler(hello),
    },
  },
}
