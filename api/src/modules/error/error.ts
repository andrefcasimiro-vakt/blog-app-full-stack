class ApiError extends Error {
  code: string
  status?: number
  info?: object

  constructor(
    code: string,
    message: string,
    status: number,
    info?: object
  ) {
    super(message)

    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.code = code
    this.status = status
    this.info = info
  }
}

export default ApiError
