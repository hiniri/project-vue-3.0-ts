const toString = Object.prototype.toString

/**
 * 判断值是否是某个类型
 *
 * @export
 * @param {unknown} val
 * @param {string} type
 * @return {*}
 */
export function is(val: unknown, type: string): unknown {
  return toString.call(val) === `[object ${type}]`
}
