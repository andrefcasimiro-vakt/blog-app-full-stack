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
  }
  /** JWT configuration */
  jwt: {
    /** The jwt secret used to sign a JWT token */
    secret: string,
    /** The duration of the generated JWT token */
    expiresIn: number,
  },
  /** List of modules used in the application */
  modules: Array<string>,
}
