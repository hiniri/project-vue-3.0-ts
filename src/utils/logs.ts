// TODO 需要从环境变量中获取
const projectName = process.env?.VUE_APP_TITLE

/**
 * 日志警告
 *
 * @export
 * @param {string} message
 */
export function warn(message: string): void {
  console.warn(`[${projectName} warn]: ${message}`)
}

/**
 * 日志错误
 *
 * @export
 * @param {string} message
 */
export function error(message: string): void {
  throw new Error(`[${projectName} warn]: ${message}`)
}
