const dNumbers = () => {
  if (drawNumbers.lenght >= maxNumbers) {
    alert('tutti numeri sono stati estratti')
    return
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const tabellone = document.getElementById('tabellone')
  const cercaButton = document.getElementById('cerca')
  const numeroInput = document.getElementById('numeroDaCercare')

  for (let i = 1; i <= 76; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.textContent = i
    cell.dataset.numero = i
    tabellone.appendChild(cell)
  }
  cercaButton.addEventListener('click', () => {
    const numero = parseInt(numeroInput.value, 10)

    const celle = document.querySelectorAll('.cell')
    celle.forEach((c) => c.classList.remove('evidenziata'))

    if (numero >= 1 && numero <= 76) {
      const cellaDaEvidenziare = document.querySelector(
        `.cell[data-numero='${numero}']`
      )
      if (cellaDaEvidenziare) {
        cellaDaEvidenziare.classList.add('evidenziata')
      }
    } else {
      alert('Per favore inserisci un numero tra 1 e 76.')
    }
  })
})
cercaButton.addEventListener('click', () => {
  const numero = parseInt(numeroInput.value, 10)

  // Evidenzia la cella corrispondente se il numero è valido
  if (numero >= 1 && numero <= 76) {
    const cellaDaEvidenziare = document.querySelector(
      `.cell[data-numero='${numero}']`
    )
    if (cellaDaEvidenziare) {
      cellaDaEvidenziare.classList.add('evidenziata')
    }
  } else {
    alert('Per favore inserisci un numero tra 1 e 76.')
  }
  cercaButton.addEventListener('click', () => {
    const numero = parseInt(numeroInput.value, 10)

    // Evidenzia la cella corrispondente se il numero è valido
    if (numero >= 1 && numero <= 76) {
      const cellaDaEvidenziare = document.querySelector(
        `.cell[data-numero='${numero}']`
      )
      if (cellaDaEvidenziare) {
        cellaDaEvidenziare.classList.add('evidenziata')
      }
    } else {
      alert('Per favore inserisci un numero tra 1 e 76.')
    }
  })
})
