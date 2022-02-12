import { warn } from '@/utils/logs'
import packageJson from '../../package.json'

// Development mode
export const DEV_MODE = 'development'
// Production mode
export const PROD_MODE = 'production'

/**
 * 获取环境变量
 *
 * @export
 * @return {*}  {string}
 */
export function getMode(): string {
  return process.env?.mode
}

/**
 * 获取应用名称
 *
 * @export
 * @return {*}  {string}
 */
export function getAppName(): string {
  return process.env?.VUE_APP_NAME
}

/**
 * 获取应用名称
 *
 * @export
 * @return {*}  {string}
 */
export function getAppShortName(): string {
  const appShortName = process.env?.VUE_APP_SHORT_NAME
  if (!appShortName) {
    warn('应用未设置变量 VUE_APP_SHORT_NAME，请在.env中设置后重启')
  }
  return process.env?.VUE_APP_SHORT_NAME
}

/**
 * 根据名称获取环境变量值
 *
 * @export
 * @param {string} name
 * @return {*}  {string}
 */
export function getEnvValueByName(name: string): string {
  return process.env[name.toLocaleUpperCase()]
}

/**
 * 获取缓存前缀（appShortName__mode__version__）
 *
 * @export
 * @return {*}  {string}
 */
export function getStoragePrefix(): string {
  const mode = getMode()
  const appShortName = getAppShortName()
  return `${appShortName}__${mode}__${packageJson.version}__`.toUpperCase()
}
