;(async () => {
  try {
    const firebase = require('firebase')
    const config = {
      apiKey: 'AIzaSyCbTmUZgrAm9V0bNoFovbRDFpWpR464Gpg',
      authDomain: 'highgrenade-9d470.firebaseapp.com',
      projectId: 'highgrenade-9d470',
    }

    firebase.initializeApp(config)
    const db = firebase.firestore()
    const userRef = db.collection('users').doc('xxx')
    const userDoc = await userRef.get()

    if (userDoc.exists) {
      console.log(userDoc.id)
      console.log(userDoc.data())
      console.log(userDoc.get('name'))
      console.log(userDoc.get('old'))
    } else {
      console.log('No such document!!')
    }
  } catch (err) {
    console.log(`Error: ${JSON.stringify(err)}`)
  }
})()
