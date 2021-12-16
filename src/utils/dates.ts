import { format } from 'date-fns'

const DATE_FORMAT = 'yyyy-MM-dd'
const DATE_TIME_FORMAT = 'yyyy-MM-dd HH:mm:ss'

/**
 * 格式化日期
 *
 * @export
 * @param {(Date | number)} date
 * @param {string} [pattern=DATE_FORMAT]
 * @return {*}  {string}
 */
export function formatDate(date: Date | number, pattern: string = DATE_FORMAT): string {
  return format(date, pattern)
}

/**
 * 格式化时间
 *
 * @export
 * @param {(Date | number)} date
 * @param {string} [pattern=DATE_TIME_FORMAT]
 * @return {*}  {string}
 */
export function formatTime(date: Date | number, pattern: string = DATE_TIME_FORMAT): string {
  return format(date, pattern)
}
