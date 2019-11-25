import { fireDB } from 'boot/firebase'
export function deleteStatistics (context, payload) {
  console.log(payload)
  return new Promise((resolve, reject) => {
    fireDB.collection('Library/uyM3J8XUI1aI4dDm0reC/Statistics').doc(payload.keyData.keyIndex).delete().then(function () {
      resolve(payload)
    }).catch(function (error) {
      reject(error)
    })
  })
}
