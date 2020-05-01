/** API configurations */
export type Config = {
  /** Auth */
  auth: {
    password: {
      minimumLength: number,
    }
    /** String used to pepperify hash strings */
    pepper: string,
    saltRounds: number,
    refreshToken: {
      length: number,
      limit: number,
      separator: string,
    },
  }
  /** JWT configuration */
  jwt: {
    /** The jwt secret used to sign a JWT token */
    secret: string,
    /** The duration of the generated JWT token */
    expiresIn: number,
  },
  http: {
    customHeaders: {
      accessToken: string,
      refreshToken: string,
    }
  },
  queue: {
    host?: string,
    user?: string,
    password?: string,
  },
  /** List of modules used in the application */
  modules: Array<string>,
}
