import envalid from 'envalid'
import dotenv from 'dotenv'

if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: 'test/test.env' })
} else {
  dotenv.config()
}

const vars = envalid.cleanEnv(
  process.env,
  {
    SERVICE_TYPE: envalid.str({ default: 'openapi-merger'.toUpperCase().replace(/-/g, '_') }),
    LOG_LEVEL: envalid.str({ default: 'info', devDefault: 'debug' }),
    PORT: envalid.port({ default: 80, devDefault: 3000 }),
    API_DOCS_FILE_PATH: envalid.str({ default: './api-docs.json' }),
    API_PUBLIC_URL_PREFIX: envalid.str({ default: '' }),
    OAUTH_CLIENT_ID: envalid.str({ default: '' }),
    OAUTH_APP_NAME: envalid.str({ default: '' }),
    OAUTH_USE_PKCE: envalid.bool({ default: 'true' }),
  },
  {
    strict: true,
  }
)

export default vars
