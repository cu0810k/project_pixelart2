import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getFirestore, doc, collection, query, where, getDocs, getDoc, setDoc, updateDoc, deleteDoc, writeBatch, onSnapshot } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCsy77MN7ig4Kq5_ij6TwJTFtALVjPDkro",
  authDomain: "project-pixelart.firebaseapp.com",
  databaseURL: "https://project-pixelart-default-rtdb.firebaseio.com",
  projectId: "project-pixelart",
  storageBucket: "project-pixelart.appspot.com",
  messagingSenderId: "956899548209",
  appId: "1:956899548209:web:4388d7281153b1a3a50910",
  measurementId: "G-VL630PMH4M"
};

// Firebase 初始化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const storage = getStorage(app);
const storageRef = ref(storage);


// 獲取目前的座位預約資料
let seatBooking = []
let hasBookSeat = []
let hasBookShot = []
async function getSeat () {
  const querySnapshot = await getDocs(collection(db, "bookingSeat"));
  querySnapshot.forEach((doc) => {
    seatBooking.push([
      doc.id, doc.data().status, doc.data().shot
    ])
  });

  // 找出已被預約的座位 ['A-1', true]
  const result = seatBooking.filter(item => item[1] == true);
  // // console.log(result);

  // 再把已被預約的座位陣列過濾一次 (取桌號)
  result.forEach((item, index) => {
    hasBookSeat.push(item[0])
  })



  // 再把已被預約的座位陣列過濾一次 (取大頭貼網址)
  result.forEach((item, index) => {
    hasBookShot.push(item[2])
  })

  // 製造座位div
  creatSeat()

}
getSeat()


// ===========================================================

const boxGroup = document.querySelector('.box-group')

let map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Com', 1, 0, 0, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 'A-1', 0, 0, 'A-2', 0, 0, 'A-3', 0, 0, 'B-1', 0, 0, 'B-2', 0, 0, 'B-3', 0, 0, 'C-1', 0, 0, 'C-2', 0, 0, 'C-3', 0, 0, 'D-1', 0, 0, 'D-2', 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 'D-3', 0, 0, 'E-1', 0, 0, 'E-2', 0, 0, 'E-3', 0, 0, 'F-1', 0, 0, 'F-2', 0, 0, 'F-3', 0, 0, 'G-1', 0, 0, 'G-2', 0, 0, 'G-3', 0, 0, 'H-1', 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 'H-2', 0, 0, 'H-3', 0, 0, 'I-1', 0, 0, 'I-2', 0, 0, 'I-3', 0, 0, 'J-1', 0, 0, 'J-2', 0, 0, 'J-3', 0, 0, 'K-1', 0, 0, 'K-2', 0, 0, 'K-3', 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

]

let range = 54

function creatSeat () {

  console.log(hasBookSeat)
  boxGroup.innerHTML = '' // 如果為取消位子後的渲染 不加此行的話
  // 會導致div疊加 

  for (let a = 0; a < map.length; a++) {
    for (let b = 0; b < map[a].length; b++) {

      let div = document.createElement('div') //新增 html 節點
      div.className = 'box'
      // div.innerText = `${a},${b}`

      // 新增 inline-style   background: ${map[a][b] ? 'yellow' : '#fff'};
      div.style.cssText = `
          width:${range}px;
          height:${range}px;
          top:${a * range}px;
          left:${b * range}px;
        `;

      // // console.log(map[a][b])

      if (map[a][b] == 'Com') {
        div.innerHTML = `
        <span class="computer"></span>`
      }

      //桌上刻字
      if (map[a][b] !== 0 && map[a][b] !== 1 && map[a][b] !== 'Com') {
        //   div.innerHTML = `<span class="
        // tableNum" data-num="${map[a][b]}">${map[a][b]}</span>`

        // // console.log(map[a][b])

        //將已被預約的座位增加大頭 hasBookSeat
        const hasBooking = (element) => element == map[a][b];
        const res = hasBookSeat.findIndex(hasBooking)


        if (hasBookSeat.includes(map[a][b]) && res !== -1) {

          // 判斷對應的大頭貼是否有網址
          // 沒有的話給預設圖片
          let picUrl = hasBookShot[res] ? hasBookShot[res] : 'images/shot.jpg'

          div.innerHTML = `
          <div class="bookPerson"
          style="
          background: url(${picUrl}) #000;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          "
          ></div>
          <span class="
          tableNum" data-num="${map[a][b]}">${map[a][b]}</span>`

        } else {
          div.innerHTML = `<span class="
          tableNum" data-num="${map[a][b]}">${map[a][b]}</span>`
        }

      }
      boxGroup.appendChild(div)
    }
  }
}



let person = document.querySelector('.person')
const talk = document.querySelector('.talk')
const dialogBox = document.querySelector('.dialogBox')
const dialogTxt = document.querySelector('.dialogBox .txt')
const bookForm = document.querySelector('.booking')
const queryForm = document.querySelector('.query')
const cancelForm = document.querySelector('.cancel')
const optionTop = document.querySelector('#optionTop')
const optionDown = document.querySelector('#optionDown')
const optionTopText = document.querySelector('.optionTopText')
const optionDownText = document.querySelector('.optionDownText')
let tableNum = ''

let x = 15;
let y = 17;

function createPerson (x, y, walk) {

  // 新增 inline-style
  person.style.cssText = `
          width:${range}px;
          height:${range}px;
          top:${x * range}px;
          left:${y * range}px;
        `;
  person.className = `person animate ${walk}`

}

createPerson(x, y)



window.addEventListener('keydown', e => {

  const k = e.key

  function chooseOption (status) {
    if (k == 'ArrowUp' && dialogBox.classList.contains(status)) {
      optionTop.focus()
      optionTop.className = 'focus'
      optionDown.className = ''
    } else if (k == 'ArrowDown' && dialogBox.classList.contains(status)) {
      optionDown.focus()
      optionTop.className = ''
      optionDown.className = 'focus'
    }
  }

  chooseOption('book')
  chooseOption('comp')
  chooseOption('querySuccess')


  // // 預約對話框的判斷
  // if (k == 'ArrowUp' && dialogBox.classList.contains('book')) {
  //   optionTop.focus()
  //   optionTop.className = 'focus'
  //   optionDown.className = ''
  // } else if (k == 'ArrowDown' && dialogBox.classList.contains('book')) {
  //   optionDown.focus()
  //   optionTop.className = ''
  //   optionDown.className = 'focus'
  // }

  // // 查詢對話框的判斷
  // if (k == 'ArrowUp' && dialogBox.classList.contains('comp')) {
  //   optionTop.focus()
  //   optionTop.className = 'focus'
  //   optionDown.className = ''
  // } else if (k == 'ArrowDown' && dialogBox.classList.contains('comp')) {
  //   optionDown.focus()
  //   optionTop.className = ''
  //   optionDown.className = 'focus'
  // }

  // // 查詢結果框的判斷
  // if (k == 'ArrowUp' && dialogBox.classList.contains('querySuccess')) {
  //   optionTop.focus()
  //   optionTop.className = 'focus'
  //   optionDown.className = ''
  // } else if (k == 'ArrowDown' && dialogBox.classList.contains('querySuccess')) {
  //   optionDown.focus()
  //   optionTop.className = ''
  //   optionDown.className = 'focus'
  // }


  // 當所有的表格跟對話都沒出現的時候才可以走
  // >>> 當有animate才可以走
  // 上  ArrowUp
  if (k == 'ArrowUp' && person.classList.contains('animate')) {
    talk.className = 'talk'
    useCom = false
    if (map[x - 1][y] === 0) {
      x--
      createPerson(x, y, 'top')
    }
    // console.log(`map[${x}][${y}]`)
  }

  // 下  ArrowDown
  if (k == 'ArrowDown' && person.classList.contains('animate')) {

    talk.className = 'talk'
    useCom = false
    if (map[x + 1][y] === 0) {
      x++
      createPerson(x, y, 'down')
    }
    // console.log(`map[${x}][${y}]`)
  }

  // 左  ArrowLeft
  if (k == 'ArrowLeft' && person.classList.contains('animate')) {

    talk.className = 'talk'
    useCom = false
    if (map[x][y - 1] === 0) {
      y--
      createPerson(x, y, 'left')
    }
    // console.log(`map[${x}][${y}]`)
  }

  // 右   ArrowRight
  if (k == 'ArrowRight' && person.classList.contains('animate')) {

    talk.className = 'talk'
    useCom = false
    if (map[x][y + 1] === 0) {
      y++
      createPerson(x, y, 'right')
    }
    // console.log(`map[${x}][${y}]`)
  }


  if (e.code === 'KeyZ' && talk.className === 'talk show') {

    talk.className = 'talk';

    // 放上面會導致第一次按對話框 直接按是 無效
    // optionTop.focus();
    // optionTop.className = 'focus'
    // optionDown.className = ''


    // console.log(useCom)
    // 將桌號與陣列hasBookSeat做交叉比對
    // 若為true，則代表座位已被預約
    if (useCom) {

      // 當在溝通時關掉animate
      person.classList.remove('animate')

      dialogBox.className = 'dialogBox show comp'
      dialogTxt.textContent = `打開了電脳!`

      optionTop.dataset.status = 'comp'
      optionDown.dataset.status = 'comp'

      optionTopText.innerHTML = '査詢預約';
      optionDownText.innerText = '取消預約';

    } else if (hasBookSeat.includes(tableNum)) {

      dialogBox.className = 'dialogBox show cannotBook'
      dialogTxt.textContent = `座位${tableNum}已被預約，請預約其他座位QQ`
      person.classList.remove('animate')

      setTimeout(() => {
        dialogBox.className = 'dialogBox'
        talk.className = 'talk show'
        person.classList.add('animate')
      }, 1000)


    } else {

      // 當在溝通時關掉animate
      person.classList.remove('animate')

      dialogBox.className = 'dialogBox show book'
      dialogTxt.textContent = `目前座位${tableNum}無人預約，是否要預約?`

      optionTop.dataset.status = 'book'
      optionDown.dataset.status = 'book'

      optionTopText.innerText = '是';
      optionDownText.innerText = '否';

    }

    optionTop.focus();
    optionTop.className = 'focus'
    optionDown.className = ''

  }


  if (e.code === 'Enter') {
    console.log('Enter')
  }

})


// ===========================================================

let useCom = false;

document.addEventListener('keyup', e => {

  const k = e.key


  // 上
  if (k == 'ArrowUp' && person.classList.contains('animate')) {

    person.className = `person animate top-stop`
    // console.log(`map[${x}][${y}]`)

    // 如果這時候停下是因為遇到桌子，則要出現 dialog
    if (map[x - 1][y] !== 1 && map[x - 1][y] !== 0 && map[x - 1][y] !== 'Com') {
      // // console.log('是桌子，編號為：' + map[x - 1][y])
      tableNum = map[x - 1][y]
      talk.className = 'talk show'
    } else if (map[x - 1][y] == 'Com') {
      talk.className = 'talk show'
      useCom = true
    }

  }

  // 下
  if (k == 'ArrowDown' && person.classList.contains('animate')) {

    person.className = `person animate down-stop`
    // console.log(`map[${x}][${y}]`)

    // 如果這時候停下是因為遇到桌子，則要出現 dialog
    if (map[x + 1][y] !== 1 && map[x + 1][y] !== 0) {
      // // console.log('是桌子，編號為：' + map[x + 1][y])
      tableNum = map[x + 1][y]
      talk.className = 'talk show'
    }

  }

  // 左
  if (k == 'ArrowLeft' && person.classList.contains('animate')) {

    person.className = `person animate left-stop`
    // console.log(`map[${x}][${y}]`)

    // 如果這時候停下是因為遇到桌子，則要出現 dialog
    if (map[x][y - 1] !== 1 && map[x][y - 1] !== 0 && map[x][y - 1] !== undefined) {
      console.log('是桌子，編號為：' + map[x][y - 1])
      tableNum = map[x][y - 1]
      talk.className = 'talk show'
    }

  }

  // 右
  if (k == 'ArrowRight' && person.classList.contains('animate')) {

    person.className = `person animate right-stop`
    // console.log(`map[${x}][${y}]`)

    // 如果這時候停下是因為遇到桌子，則要出現 dialog
    if (map[x][y + 1] !== 1 && map[x][y + 1] !== 0 && map[x][y + 1] !== 'Com' && map[x][y + 1] !== undefined) {
      console.log('是桌子，編號為：' + map[x][y + 1])
      tableNum = map[x][y + 1]
      talk.className = 'talk show'

    } else if (map[x][y + 1] == 'Com') {
      talk.className = 'talk show'
      useCom = true
    }

  }

})


// ===========================================================

// 上選項監聽
optionTop.addEventListener('keydown', e => {

  // book  > 關掉 DialogBox > 開啟預約表單
  // com > 關掉 DialogBox > 開啟查詢表單
  // querySuccess  > 關掉 DialogBox > 開啟查詢表單

  const status = e.target.dataset.status

  if (e.code === 'Enter' && status === 'book') {
    dialogBox.className = 'dialogBox';
    bookForm.className = 'booking show';
    document.querySelector('.booking .tableNum').innerText = tableNum
  } else if (e.code === 'Enter' && status === 'comp') {
    dialogBox.className = 'dialogBox';
    queryForm.className = 'query show';
  } else if (e.code === 'Enter' && status === 'querySuccess') {
    dialogBox.className = 'dialogBox';
    queryForm.className = 'query show';
  }

})

// 下選項監聽
optionDown.addEventListener('keydown', e => {

  // book  > 關掉 DialogBox > 顯示talk
  // com > 關掉 DialogBox > 開啟取消表單 
  // querySuccess  > 關掉 DialogBox > 顯示talk

  const status = e.target.dataset.status

  if (e.code === 'Enter' && status === 'book') {
    dialogBox.className = 'dialogBox';
    talk.className = 'talk show';
    // 結束對話時開啟animate
    person.classList.add('animate')
  } else if (e.code === 'Enter' && status === 'comp') {
    dialogBox.className = 'dialogBox';
    cancelForm.className = 'cancel show';
  } else if (e.code === 'Enter' && status === 'querySuccess') {
    dialogBox.className = 'dialogBox';
    talk.className = 'talk show';
    person.classList.add('animate')

    // 離開查詢結果表單要重置
    // 關閉表單
    document.forms["queryForm"].reset();
    document.querySelector('.query .name .notice').className = 'notice'
    document.querySelector('.query .tel .notice').className = 'notice'

  }

})


// 資料庫
// ===========================================================

// 預約表單
const bookingOut = document.querySelector('.booking .btn_out')
const bookingSubmit = document.querySelector('.booking .btn_submit')
const inputBookName = document.querySelector('#inputBookName')
const inputBookGender = document.querySelector('#inputBookGender')
const inputBookTel = document.querySelector('#inputBookTel')
const uploader = document.querySelector('#uploader')
const pic = document.querySelector('.pic')
const picUpload = document.querySelector('#file-upload')

let shot = null;

// 查詢表單
const queryOut = document.querySelector('.query .btn_out')
const querySubmit = document.querySelector('.query .btn_submit')
const inputQueryName = document.querySelector('#inputQueryName')
const inputQueryGender = document.querySelector('#inputQueryGender')
const inputQueryTel = document.querySelector('#inputQueryTel')

// 取消表單
const cancelOut = document.querySelector('.cancel .btn_out')
const cancelSubmit = document.querySelector('.cancel .btn_submit')
const inputCancelName = document.querySelector('#inputCancelName')
const inputCancelGender = document.querySelector('#inputCancelGender')
const inputCancelTel = document.querySelector('#inputCancelTel')



// 預約表單 -- 退出
bookingOut.addEventListener('click', e => {

  console.log('取消退出')

  // 結束對話時開啟animate
  person.classList.add('animate')

  // 關閉表單
  bookForm.className = 'booking'

  // 表單重置
  document.forms["bookingForm"].reset();
  pic.style = ''
  uploader.innerHTML = `
  <label for="file-upload" class="pic-control">
            上傳大頭貼
          </label>
          <div class="run"></div>`
  document.querySelector('.name .notice').className = 'notice'
  document.querySelector('.tel .notice').className = 'notice'

  talk.className = 'talk show'
})


// 預約表單 -- 送出
bookingSubmit.addEventListener('click', e => {

  // 判斷有無填寫資料
  const bookFormCheck = new CheckForm(inputBookName, inputBookTel, 'booking')
  console.log(bookFormCheck.notice)
  bookFormCheck.checkForm();
  if (bookFormCheck.notice) {
    return
  }

  // if (inputBookName.value.trim() == '' && inputBookTel.value.trim() == '') {
  //   document.querySelector('.booking .name .notice').className = 'notice show shock'
  //   document.querySelector('.booking .tel .notice').className = 'notice show shock'
  //   setTimeout(() => {
  //     document.querySelector('.booking .name .notice').className = 'notice show'
  //     document.querySelector('.booking .tel .notice').className = 'notice show'
  //   }, 500)

  //   return
  // } else if (inputBookName.value.trim() == '') {
  //   document.querySelector('.booking .name .notice').className = 'notice show shock'
  //   setTimeout(() => {
  //     document.querySelector('.booking .name .notice').className = 'notice show'
  //   }, 500)
  //   return

  // } else if (inputBookTel.value.trim() == '') {
  //   document.querySelector('.booking .tel .notice').className = 'notice show shock'
  //   setTimeout(() => {
  //     document.querySelector('.booking .tel .notice').className = 'notice show'
  //   }, 500)
  //   return
  // }


  // 先將資料集合在一起
  let data = {
    inputName: inputBookName.value,
    inputGender: inputBookGender.value,
    inputTel: inputBookTel.value,
    tableNum: tableNum,
    shot: shot || '',
    status: true
  }

  console.log(data)

  // 先去資料庫搜尋這個人有無預約
  const bookingSeatRef = collection(db, "bookingSeat")
  const q = query(bookingSeatRef,
    where("inputGender", "==", data.inputGender),
    where("inputName", "==", data.inputName),
    where("inputTel", "==", data.inputTel))

  async function queryPerson () {

    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length) {

      let queryData = {}
      querySnapshot.forEach((doc) => {
        queryData = doc.data()
      });

      dialogBox.className = 'dialogBox show cannotBook'
      dialogTxt.textContent = `${queryData.inputName}已預約座位 ${queryData.tableNum}，因此不可再預約`

      // 跳出查無預約時 先讓查詢表格消失
      // 等查無預約消失後 再讓查詢表格出現
      setTimeout(() => {
        dialogBox.className = 'dialogBox'
      }, 1500)
    } else {
      addBook()
    }

  }

  queryPerson(q)



  // 確定此人無預約才將資料送到資料庫
  async function addBook () {
    try {

      await updateDoc(doc(db, 'bookingSeat', tableNum), data)
      // console.log('預約成功')
      dialogBox.className = 'dialogBox show bookSuccess'
      dialogTxt.textContent = `預約成功 !`


      const unsub = onSnapshot(doc(db, "bookingSeat", tableNum), { includeMetadataChanges: true }, (doc) => {
        const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        // console.log(source, " data: ", doc.data());


        // 重抓一次座位資訊
        getSeat()

      });

      setTimeout(() => {
        dialogBox.className = 'dialogBox'
      }, 1000)
    } catch (error) {
      // console.log(error)
    }
  }

  // 關閉表單
  bookForm.className = 'booking'

  // 表單重置
  document.forms["bookingForm"].reset();
  pic.style = ''
  uploader.innerHTML = `
  <label for="file-upload" class="pic-control">
            上傳大頭貼
          </label>
          <div class="run"></div>`
  document.querySelector('.booking .name .notice').className = 'notice'
  document.querySelector('.booking .tel .notice').className = 'notice'


  talk.className = 'talk show'
  // 結束對話時開啟animate
  person.classList.add('animate')

});




// 上傳大頭貼
picUpload.addEventListener('change', e => {

  // 不知道為什麼放在全域的話 只有第一次可以呈現上傳的特效
  const picTxt = document.querySelector('.pic-control')
  const uploaderRun = document.querySelector('#uploader .run')

  console.log(e)
  // 取得檔案資訊
  const file = e.target.files[0];
  const path = file.name;

  // 取得 storage 對應的位置
  const storageRef = ref(storage, path);

  // 先設定進度條的寬為0
  uploaderRun.style.width = '0%'

  const uploadTask = uploadBytesResumable(storageRef, file);


  // // .on()監聽並連動 progress 讀取條
  // // .on("state_changed", callback1, callback2, callback3）
  // // https://simonallen.coderbridge.io/2020/03/07/firebase-storage-note/
  uploadTask.on("state_changed",
    function progress (snapshot) {

      const id = setInterval(frame, 0)
      let width = 0
      picTxt.textContent = "上傳中...";

      function frame () {
        setInterval(() => {
          if (width >= 100) {
            clearInterval(id);
          } else {
            width++;
            uploaderRun.style.width = width + '%';
          }
        }, 30)
      }
    },
    function error (err) {

      picTxt.textContent = "上傳失敗";
    },
    function complete () {

      picTxt.textContent = "上傳成功!";
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

        shot = downloadURL
        pic.style = `background-image: url(${downloadURL});`

      });
    }
  );
})

// ==========================


// 查詢預約 -- 退出
queryOut.addEventListener('click', e => {

  // 關閉表單
  queryForm.className = 'query'

  // 表單重置
  document.forms["queryForm"].reset();

  document.querySelector('.query .name .notice').className = 'notice'
  document.querySelector('.query .tel .notice').className = 'notice'

  talk.className = 'talk show'
  // 結束對話時開啟animate
  person.classList.add('animate')
})


// 查詢預約 -- 送出
querySubmit.addEventListener('click', e => {

  // 判斷有無填寫資料
  const queryFormCheck = new CheckForm(inputQueryName, inputQueryTel, 'query')
  queryFormCheck.checkForm();

  if (queryFormCheck.notice) {
    return
  }
  // if (inputQueryName.value.trim() == '' && inputQueryTel.value.trim() == '') {
  //   document.querySelector('.query .name .notice').className = 'notice show shock'
  //   document.querySelector('.query .tel .notice').className = 'notice show shock'
  //   setTimeout(() => {
  //     document.querySelector('.query .name .notice').className = 'notice show'
  //     document.querySelector('.query .tel .notice').className = 'notice show'
  //   }, 500)

  //   return
  // } else if (inputQueryName.value.trim() == '') {
  //   document.querySelector('.query .name .notice').className = 'notice show shock'
  //   setTimeout(() => {
  //     document.querySelector('.query .name .notice').className = 'notice show'
  //   }, 500)
  //   return

  // } else if (inputQueryTel.value.trim() == '') {
  //   document.querySelector('.query .tel .notice').className = 'notice show shock'
  //   setTimeout(() => {
  //     document.querySelector('.query .tel .notice').className = 'notice show'
  //   }, 500)
  //   return
  // }


  // 先將資料集合在一起
  let data = {
    inputName: inputQueryName.value,
    inputGender: inputQueryGender.value,
    inputTel: inputQueryTel.value,
  }

  // 連接資料庫查詢
  const bookingSeatRef = collection(db, "bookingSeat")
  const q = query(bookingSeatRef,
    where("inputGender", "==", data.inputGender),
    where("inputName", "==", data.inputName),
    where("inputTel", "==", data.inputTel))

  async function queryData () {

    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length) {
      let queryData = {}
      querySnapshot.forEach((doc) => {
        queryData = doc.data()
      });

      // 查到後，暫時關閉查詢表單
      queryForm.className = 'query'
      // 跳出查詢結果
      dialogBox.className = 'dialogBox show querySuccess'
      dialogTxt.innerHTML = `${queryData.inputName}預約的座位為 ${queryData.tableNum}!`

      optionTop.dataset.status = 'querySuccess'
      optionDown.dataset.status = 'querySuccess'

      optionTop.focus();
      optionTop.className = 'focus'
      optionDown.className = ''

      optionTopText.innerHTML = '回到査詢';
      optionDownText.innerText = '離開対話';


    } else {

      // 查到後，暫時關閉查詢表單
      queryForm.className = 'query'

      dialogBox.className = 'dialogBox show cannotBook' //CSS一樣 所以直接用 cannotBook
      dialogTxt.textContent = `査無預約QQ`

      // 跳出查詢結果時 先讓查詢表單暫時關閉
      // 等查詢結果自動消失後，再讓查詢表單出現
      setTimeout(() => {
        dialogBox.className = 'dialogBox'
        queryForm.className = 'query show'
      }, 1000)
    }

  }

  queryData(q)



})

// ==========================

// 取消預約 -- 退出
cancelOut.addEventListener('click', e => {

  // 關閉表單
  cancelForm.className = 'cancel'

  // 表單重置
  document.forms["cancelForm"].reset();

  document.querySelector('.cancel .name .notice').className = 'notice'
  document.querySelector('.cancel .tel .notice').className = 'notice'

  person.classList.add('animate')
  talk.className = 'talk show'
})


// 取消預約 -- 送出

cancelSubmit.addEventListener('click', e => {
  // 判斷有無填寫資料
  const cancelFormCheck = new CheckForm(inputCancelName, inputCancelTel, 'cancel')
  cancelFormCheck.checkForm();
  if (cancelFormCheck.notice) {
    return
  }

  // if (inputCancelName.value.trim() == '' && inputCancelTel.value.trim() == '') {
  //   document.querySelector('.cancel .name .notice').className = 'notice show shock'
  //   document.querySelector('.cancel .tel .notice').className = 'notice show shock'
  //   setTimeout(() => {
  //     document.querySelector('.cancel .name .notice').className = 'notice show'
  //     document.querySelector('.cancel .tel .notice').className = 'notice show'
  //   }, 500)

  //   return
  // } else if (inputCancelName.value.trim() == '') {
  //   document.querySelector('.cancel .name .notice').className = 'notice show shock'
  //   setTimeout(() => {
  //     document.querySelector('.cancel .name .notice').className = 'notice show'
  //   }, 500)
  //   return

  // } else if (inputCancelTel.value.trim() == '') {
  //   document.querySelector('.cancel .tel .notice').className = 'notice show shock'
  //   setTimeout(() => {
  //     document.querySelector('.cancel .tel .notice').className = 'notice show'
  //   }, 500)
  //   return
  // }

  // 先將資料集合在一起
  let data = {
    inputName: inputCancelName.value,
    inputGender: inputCancelGender.value,
    inputTel: inputCancelTel.value,
  }

  // 連接資料庫查詢
  const bookingSeatRef = collection(db, "bookingSeat")
  const q = query(bookingSeatRef,
    where("inputGender", "==", data.inputGender),
    where("inputName", "==", data.inputName),
    where("inputTel", "==", data.inputTel))

  async function queryData () {

    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length) {
      let queryData = {}
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        queryData = doc.data()
      });
      console.log(queryData)


      // 查到預約後開始進行刪除的動作
      // 關閉表單
      cancelForm.className = 'cancel'
      // 表單重置
      document.forms["cancelForm"].reset();
      document.querySelector('.cancel .name .notice').className = 'notice'
      document.querySelector('.cancel .tel .notice').className = 'notice'


      // 刪除資料
      cancelBook(queryData.tableNum)
    } else {
      dialogTxt.textContent = `査無此預約QQ`

      cancelForm.className = 'cancel'
      dialogBox.className = 'dialogBox show cannotBook' // CSS

      // 跳出查無預約時 先讓查詢表格消失
      // 等查無預約消失後 再讓查詢表格出現
      setTimeout(() => {
        dialogBox.className = 'dialogBox'
        cancelForm.className = 'cancel show'
      }, 1000)
    }
  }

  queryData(q)



  async function cancelBook (tableNum) {
    try {

      let data = {
        inputName: '',
        inputGender: '',
        inputTel: '',
        tableNum: '',
        shot: '',
        status: false
      }

      await updateDoc(doc(db, 'bookingSeat', tableNum), data)
      dialogBox.className = 'dialogBox show bookSuccess'
      dialogTxt.textContent = `預約座位 ${tableNum} 已取消!`

      person.classList.add('animate')
      talk.className = 'talk show';

      const unsub = onSnapshot(doc(db, "bookingSeat", tableNum), { includeMetadataChanges: true }, (doc) => {
        const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        console.log('source', source)

        // 重抓一次座位資訊
        seatBooking = []
        hasBookSeat = []
        hasBookShot = []
        getSeat()

      });

      setTimeout(() => {
        dialogBox.className = 'dialogBox'
      }, 1000)
    } catch (error) {
      // console.log(error)
    }
  }

})


// 練習建構 =================================

function CheckForm (inputName, inputTel, status) {

  // 姓名input
  this.inputName = inputName
  // 電話input
  this.inputTel = inputTel
  // 姓名notice
  this.nameNotice = document.querySelector(`.${status} .name .notice`)
  // 電話notice
  this.telNotice = document.querySelector(`.${status} .tel .notice`)

  this.notice = false
}

// 不該把方法放在 function constructor 的原因 ↓
// https://dylan237.github.io/function-constructor.html
CheckForm.prototype.checkForm = function () {
  if (this.inputName.value.trim() == '' && this.inputTel.value.trim() == '') {

    this.nameNotice.className = 'notice show shock'
    this.telNotice.className = 'notice show shock'
    setTimeout(() => {
      this.nameNotice.className = 'notice show'
      this.telNotice.className = 'notice show'
    }, 500)

    return this.notice = true

  } else if (this.inputName.value.trim() == '') {

    this.nameNotice.className = 'notice show shock'
    setTimeout(() => {
      this.nameNotice.className = 'notice show'
    }, 500)
    return this.notice = true

  } else if (this.inputTel.value.trim() == '') {

    this.telNotice.className = 'notice show shock'
    setTimeout(() => {
      this.telNotice.className = 'notice show'
    }, 500)
    return this.notice = true

  }

  this.notice = false
}