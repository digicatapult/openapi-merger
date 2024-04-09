import envalid from 'envalid'
import dotenv from 'dotenv'

if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: 'test/test.env' })
}

const vars = envalid.cleanEnv(
  process.env,
  {
    SERVICE_TYPE: envalid.str({ default: 'openapi-merger'.toUpperCase().replace(/-/g, '_') }),
    LOG_LEVEL: envalid.str({ default: 'info', devDefault: 'debug' }),
    PORT: envalid.port({ default: 80, devDefault: 3000 }),
    API_DOCS_FILE_PATH: envalid.str({ default: './api-docs.json' }),
    API_DOCS_URL_PATH: envalid.str({ default: '/api-docs' }),
  },
  {
    strict: true,
  }
)

export default vars
