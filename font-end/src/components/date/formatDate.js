export const formatDate = (eventDateMongoDb) => {
  let date = new Date(eventDateMongoDb)
  let day = String(date.getDate()).padStart(2, '0')
  let month = date.toLocaleString('en-US', { month: 'long' })
  let year = date.getFullYear()

  return `${day} ${month} ${year}`
}