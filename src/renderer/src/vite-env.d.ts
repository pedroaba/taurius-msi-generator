/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly M_VITE_DATABASE_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
