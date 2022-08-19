export const formatBudget = (cantidad) => {
  const locale = 'es-PE'
  const options = { style: 'currency', currency: 'PEN' }

  return cantidad.toLocaleString(locale, options)
}
