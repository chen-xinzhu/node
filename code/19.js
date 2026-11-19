document.querySelectorAll('td').forEach((td) => {
  td.addEventListener('click', () => {
    document.querySelectorAll('td').forEach((item) => {
      item.classList.remove('active')
    })
    td.classList.add('active')
  })
})
