const { asyncHandler } = require('../../middlewares/asyncHandler')
const { list } = require('./list.action')
module.exports = {
  '/': {
    get: {
      action: asyncHandler(list),
    },
  },
}
