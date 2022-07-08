// 判斷有無填寫資料
if (inputBookName.value.trim() == '' && inputBookTel.value.trim() == '') {
  document.querySelector('.booking .name .notice').className = 'notice show shock'
  document.querySelector('.booking .tel .notice').className = 'notice show shock'
  setTimeout(() => {
    document.querySelector('.booking .name .notice').className = 'notice show'
    document.querySelector('.booking .tel .notice').className = 'notice show'
  }, 500)

  return
} else if (inputBookName.value.trim() == '') {
  document.querySelector('.booking .name .notice').className = 'notice show shock'
  setTimeout(() => {
    document.querySelector('.booking .name .notice').className = 'notice show'
  }, 500)
  return

} else if (inputBookTel.value.trim() == '') {
  document.querySelector('.booking .tel .notice').className = 'notice show shock'
  setTimeout(() => {
    document.querySelector('.booking .tel .notice').className = 'notice show'
  }, 500)
  return
}


// -----------------


  // 判斷有無填寫資料
  if (inputQueryName.value.trim() == '' && inputQueryTel.value.trim() == '') {
    document.querySelector('.query .name .notice').className = 'notice show shock'
    document.querySelector('.query .tel .notice').className = 'notice show shock'
    setTimeout(() => {
      document.querySelector('.query .name .notice').className = 'notice show'
      document.querySelector('.query .tel .notice').className = 'notice show'
    }, 500)

    return
  } else if (inputQueryName.value.trim() == '') {
    document.querySelector('.query .name .notice').className = 'notice show shock'
    setTimeout(() => {
      document.querySelector('.query .name .notice').className = 'notice show'
    }, 500)
    return

  } else if (inputQueryTel.value.trim() == '') {
    document.querySelector('.query .tel .notice').className = 'notice show shock'
    setTimeout(() => {
      document.querySelector('.query .tel .notice').className = 'notice show'
    }, 500)
    return
  }


 // -----------------

    // 判斷有無填寫資料
  if (inputCancelName.value.trim() == '' && inputCancelTel.value.trim() == '') {
    document.querySelector('.cancel .name .notice').className = 'notice show shock'
    document.querySelector('.cancel .tel .notice').className = 'notice show shock'
    setTimeout(() => {
      document.querySelector('.cancel .name .notice').className = 'notice show'
      document.querySelector('.cancel .tel .notice').className = 'notice show'
    }, 500)

    return
  } else if (inputCancelName.value.trim() == '') {
    document.querySelector('.cancel .name .notice').className = 'notice show shock'
    setTimeout(() => {
      document.querySelector('.cancel .name .notice').className = 'notice show'
    }, 500)
    return

  } else if (inputCancelTel.value.trim() == '') {
    document.querySelector('.cancel .tel .notice').className = 'notice show shock'
    setTimeout(() => {
      document.querySelector('.cancel .tel .notice').className = 'notice show'
    }, 500)
    return
  }