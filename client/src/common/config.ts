import path from 'path'
import dotenv from 'dotenv'

dotenv.config({
  path: path.join(__dirname, '../../.env'),
})

const URL_SERVER = process.env.URL_SERVER || 'http://localhost:4000'

export { URL_SERVER }
