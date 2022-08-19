export const formatDate = (date) => {
  const newDate = new Date(date)
  const locale = 'es-PE'
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }

  const formattedDate = newDate.toLocaleString(locale, options)
  return formattedDate
}
