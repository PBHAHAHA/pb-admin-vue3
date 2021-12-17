const getChildrenRoutes = (routes) => {
  const result = []
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })
  return result
}

export const filterRoutes = (routes) => {
  const childrenRoutes = getChildrenRoutes(routes)

  return routes.filter((route) => {
    childrenRoutes.find((childrenRoute) => {
      return childrenRoute.path === route.path
    })
  })
}
function isNull(data) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
}
export const generateMenus = (routes, basePath = '') => {
  const result = []
  routes.forEach((item) => {
    // 不存在 children &&  不存在meta直接return
    if (isNull(item.children) && isNull(item.meta)) {
    }
  })
  return result
}
