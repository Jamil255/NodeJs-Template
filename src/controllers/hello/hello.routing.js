import { asyncHandler } from '../../middlewares/asyncHandler'
import { auth } from '../../middlewares/auth'
import validationResponse from '../../middlewares/validation-response'
import { validate } from '../../validators/auth'
import { hello } from './hi.action'
import { list } from './list.action'

module.exports = {
  '/': {
    get: {
      middlewares: [
        auth,
        validate({ field: 'email', values: ['found', 'missing'] }),
        validationResponse,
      ],

      action: asyncHandler(list),
    },
  },
  '/hi': {
    get: {
      action: asyncHandler(hello),
    },
  },
}
