// 預約對話框的判斷
if (k == 'ArrowUp' && dialogBox.classList.contains('book')) {
  optionTop.focus()
  optionTop.className = 'focus'
  optionDown.className = ''
} else if (k == 'ArrowDown' && dialogBox.classList.contains('book')) {
  optionDown.focus()
  optionTop.className = ''
  optionDown.className = 'focus'
}

// 查詢對話框的判斷
if (k == 'ArrowUp' && dialogBox.classList.contains('comp')) {
  optionTop.focus()
  optionTop.className = 'focus'
  optionDown.className = ''
} else if (k == 'ArrowDown' && dialogBox.classList.contains('comp')) {
  optionDown.focus()
  optionTop.className = ''
  optionDown.className = 'focus'
}

// 查詢結果框的判斷
if (k == 'ArrowUp' && dialogBox.classList.contains('querySuccess')) {
  optionTop.focus()
  optionTop.className = 'focus'
  optionDown.className = ''
} else if (k == 'ArrowDown' && dialogBox.classList.contains('querySuccess')) {
  optionDown.focus()
  optionTop.className = ''
  optionDown.className = 'focus'
}