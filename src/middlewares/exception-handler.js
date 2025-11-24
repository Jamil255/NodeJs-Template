import translate from '../helpers/translate.js'

export default (error, request, response, next) => {
  if (process.env.MYSQL_DB_LOGGING !== false) {
    // eslint-disable-next-line
    console.log(error, 'error')
  }
  switch (error.name) {
    case 'AppValidationError':
      response.status(error.code).json({
        message: error.message,
      })

      break

    case 'SequelizeUniqueConstraintError': {
      let message
      if (error.errors && error.errors.length) {
        const columnName = error.errors[0].path.split('.').pop()
        // eslint-disable-next-line no-console
        console.log(columnName.charAt(0).toUpperCase() + columnName.slice(1))
        message = translate('validations', 'unique', {
          ':attribute':
            columnName.charAt(0).toUpperCase() + columnName.slice(1),
        })
        message = message ? message : error.errors[0].message
      }
      response.status(409).json({
        message,
      })

      break
    }

    default:
      response.status(500).json({
        message: translate('errors', 'default'),
      })
  }
}

export const asyncHandler = (callback) => {
  // eslint-disable-next-line func-names
  return function (request, response, next) {
    return callback(request, response, next).catch(next)
  }
}
