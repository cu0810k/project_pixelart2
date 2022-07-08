// 當所有的表格跟對話都沒出現的時候才可以走
  // >>> 當有animate才可以走
  // 上  ArrowUp
  if (k == 'ArrowUp' && !dialogBox.classList.contains('show') && !bookForm.classList.contains('show') && !queryForm.classList.contains('show') && !cancelForm.classList.contains('show')) {
    talk.className = 'talk'
    useCom = false
    if (map[x - 1][y] === 0) {
      x--
      createPerson(x, y, 'top')
    }
    // console.log(`map[${x}][${y}]`)
  }

  // 下  ArrowDown
  if (k == 'ArrowDown' && !dialogBox.classList.contains('show') && !bookForm.classList.contains('show') && !queryForm.classList.contains('show') && !cancelForm.classList.contains('show')) {

    talk.className = 'talk'
    useCom = false
    if (map[x + 1][y] === 0) {
      x++
      createPerson(x, y, 'down')
    }
    // console.log(`map[${x}][${y}]`)
  }

  // 左  ArrowLeft
  if (k == 'ArrowLeft' && !dialogBox.classList.contains('show') && !bookForm.classList.contains('show') && !queryForm.classList.contains('show') && !cancelForm.classList.contains('show')) {

    talk.className = 'talk'
    useCom = false
    if (map[x][y - 1] === 0) {
      y--
      createPerson(x, y, 'left')
    }
    // console.log(`map[${x}][${y}]`)
  }

  // 右   ArrowRight
  if (k == 'ArrowRight' && !dialogBox.classList.contains('show') && !bookForm.classList.contains('show') && !queryForm.classList.contains('show') && !cancelForm.classList.contains('show')) {

    talk.className = 'talk'
    useCom = false
    if (map[x][y + 1] === 0) {
      y++
      createPerson(x, y, 'right')
    }
    // console.log(`map[${x}][${y}]`)
  }