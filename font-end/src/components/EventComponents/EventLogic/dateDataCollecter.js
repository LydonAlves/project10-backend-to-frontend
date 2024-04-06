export const dateDataCollecter = () => {
  const day = document.getElementById('daySelect').value
  const month = document.getElementById('monthSelect').value
  const year = document.getElementById('yearSelect').value

  const dateData = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  return dateData
}
