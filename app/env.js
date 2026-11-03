import { cleanEnv, str, port, bool } from 'envalid'
import dotenv from 'dotenv'

if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: 'test/test.env' })
} else {
  dotenv.config()
}

const vars = cleanEnv(
  process.env,
  {
    SERVICE_TYPE: str({ default: 'openapi-merger'.toUpperCase().replace(/-/g, '_') }),
    LOG_LEVEL: str({ default: 'info', devDefault: 'debug' }),
    PORT: port({ default: 80, devDefault: 3000 }),
    API_DOCS_FILE_PATH: str({ default: './api-docs.json' }),
    API_PUBLIC_URL_PREFIX: str({ default: '' }),
    OAUTH_CLIENT_ID: str({ default: '' }),
    OAUTH_APP_NAME: str({ default: '' }),
    OAUTH_USE_PKCE: bool({ default: 'true' }),
  },
  {
    strict: true,
  }
)

export default vars
