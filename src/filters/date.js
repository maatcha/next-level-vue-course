export default value => {
  const date = new Date(value)
  return date.toLocaleString(['eng-US'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  })
}
