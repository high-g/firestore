let db, text, btnRegist, btnSearch, searchFlg

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
}

const setEvent = () => {
  btnRegist.addEventListener('click', regist, false)
  btnSearch.addEventListener('click', search, false)
}

const search = () => {
  console.log('search')
  if (searchFlg) return
  searchFlg = true
  db.collection('users')
    .get()
    .then((query) => {
      query.forEach((doc) => {
        console.log(`${doc.id}:`)
        console.log(doc.data())
      })
    })
}

const regist = () => {
  console.log('regist')
}

init()
