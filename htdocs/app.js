let db, text, btnRegist, btnSearch, searchFlg, searchList

const init = () => {
  setDB()
  getDom()
  setEvent()
}

const setDB = () => {
  db = firebase.firestore()
}

const getDom = () => {
  text = document.getElementById('text')
  btnRegist = document.getElementById('btnRegist')
  btnSearch = document.getElementById('btnSearch')
  searchList = document.getElementById('searchList')
}

const setEvent = () => {
  btnRegist.addEventListener('click', regist, false)
  btnSearch.addEventListener('click', search, false)
}

const search = () => {
  console.log('search')
  if (searchFlg) return
  searchFlg = true

  searchList.textContent = null

  db.collection('users')
    .get()
    .then((query) => {
      query.forEach((doc) => {
        const li = document.createElement('li')
        li.textContent = doc.id + ' : ' + JSON.stringify(doc.data())
        searchList.appendChild(li)
        searchFlg = false
      })
    })
}

const regist = () => {
  console.log('regist')
  if (text.value === '') return
  db.collection('users').add({ name: text.value })
  text.value = ''
}

init()
