export const classToggler = (config) =>
  Object.keys(config).filter(key => config[key]).join(' ')

export const renderIf = (test, component) =>
  test ? component : undefined
