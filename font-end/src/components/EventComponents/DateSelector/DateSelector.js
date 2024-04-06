export const dateDropdownList = () => {
  const dateDropdown = `
  <label for="daySelect" class="day">Day:</label>
  <select id="daySelect" name="day">
  </select>

  <label for="monthSelect" class="month">Month:</label>
  <select id="monthSelect" name="month">
      <option value="1">January</option>
      <option value="2">February</option>
      <option value="3">March</option>
      <option value="4">April</option>
      <option value="5">May</option>
      <option value="6">June</option>
      <option value="7">July</option>
      <option value="8">August</option>
      <option value="9">September</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
  </select>

  <label for="yearSelect" class="year"">Year:</label>
  <select id="yearSelect" name="year">
      <option value="2024">2024</option>
      <option value="2025">2025</option>
      <option value="2026">2026</option>
      <option value="2027">2027</option>
      <option value="2028">2028</option>
      <option value="2029">2029</option>
      <option value="2030">2030</option>
  </select>
  `
  return dateDropdown
}

export const dateDropdownLogic = () => {
  const monthSelect = document.getElementById('monthSelect')
  const daySelect = document.getElementById('daySelect')

  const updatedays = () => {
    const month = monthSelect.value
    let days = 31

    if (month === '4' || month === '6' || month === '9' || month === '11') {
      days = 30
    } else if (month === '2') {
      days = 28
    }

    daySelect.innerHTML = ''
    for (let i = 1; i <= days; i++) {
      const option = document.createElement('option')
      option.value = i
      option.textContent = i
      daySelect.append(option)
    }
  }

  monthSelect.addEventListener('change', updatedays)
  updatedays()
}
