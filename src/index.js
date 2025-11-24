/* eslint-disable import/no-extraneous-dependencies */
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import lumie from 'lumie'
import morgan from 'morgan'
import path from 'path'
;import exceptionHandler from './middlewares/exception-handler'
(async function () {
  /**
   * load environment variables from .env
   */
  dotenv.config()

  /**
   * initiate the express server instance
   */
  const app = express()

  /**
   * initiate the sentry instance
   */
  // Sentry.init({
  //     dsn: process.env.SENTRY_DSN,
  //     environment: process.env.NODE_ENV,
  //     integrations: [
  //         // enable HTTP calls tracing
  //         new Sentry.Integrations.Http({ tracing: true }),
  //         // enable Express.js middleware tracing
  //         new Tracing.Integrations.Express({ app }),
  //     ],

  //     // Set tracesSampleRate to 1.0 to capture 100%
  //     // of transactions for performance monitoring.
  //     // We recommend adjusting this value in production
  //     tracesSampleRate: 0,
  // })

  /**
     * The request handler must be the
     * first middleware on the app
    //  */
  // app.use(Sentry.Handlers.requestHandler())

  /**
   * TracingHandler creates a trace
   * for every incoming request
   */
  // app.use(Sentry.Handlers.tracingHandler())

  /**
   * enable cors for express app
   */
  app.use(cors({ origin: '*' }))

  app.use(morgan('dev'))

  /**
   * Default exception handing
   */
  app.use(exceptionHandler)

  /**
   * parse the form data from body using body parser
   */
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

  /**
   * parse the json from body using body parser
   */
  app.use(
    bodyParser.json({
      limit: '100mb',
    })
  )

  /**
   * Bind routes with express app
   */

  lumie.load(app, {
    preURL: 'api',
    verbose: true,
    ignore: ['*.spec', '*.action', '*.md'],
    controllers_path: path.join(__dirname, 'controllers'),
  })
  /**
   * connect to the mongodb wait for the connection then proceed
   */

  //   await dbConnect(process.env.MONGO_URL || 'helloyourmongodburlisnotset')

  /**
   * get express port from .env
   * or declare with default value
   */
  const port = process.env.PORT || 3000

  /**
   * listen to the exposed port
   */
  app.listen(port, () => {
    // eslint-disable-next-line
    console.log('App server started on port ' + port)
  })
})()