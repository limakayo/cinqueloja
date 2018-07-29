import firebase from '../utils/firebaseUtils'

export default class FirebaseService {
  static putFoto = (file, name, callback) => {
    const firebaseRef = firebase.storage().ref()
    const uploadTask = firebaseRef.child('fotos/' + name).put(file)

    uploadTask.on('state_changed', (snapshot) => {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log('Upload is ' + progress + '% done')
    }, (error) => {
      switch(error.code) {
        case 'storage/unauthorized':
          console.log('usuário não autorizado')
          break;
        case 'storage/canceled':
          console.log('usuário cancelou o upload')
          break;
        case 'storage/unknown':
          console.log('erro desconhecido')
          break;
        default:
          break;
      }
    }, () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        callback(downloadURL)
      })
    })
  }

  static deleteFoto = (fileName, callback) => {
    const firebaseRef = firebase.storage().ref()
    const imageRef = firebaseRef.child(`fotos/${fileName}`)
    imageRef.delete().then((success) => {
      // File deleted successfully
      callback(success)
    }).catch((error) => {
      // Error occurred
      callback(error)
    })
  }
}
