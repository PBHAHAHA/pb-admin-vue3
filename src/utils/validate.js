/**
 * 判断是否是外部资源
 * @param {*} path
 */
export function isExteral(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
