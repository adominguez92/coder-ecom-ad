// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getFirestore, query, collection, getDocs, where, doc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO-1mRbCeRgU7MK-PGZjQWkr5Vgv80LyU",
  authDomain: "ecom-ad-5bd1f.firebaseapp.com",
  projectId: "ecom-ad-5bd1f",
  storageBucket: "ecom-ad-5bd1f.appspot.com",
  messagingSenderId: "412559619436",
  appId: "1:412559619436:web:5f8915102e8f07d6fa6f49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 

export const firestoreFetch = async (categoryId) => {
    let q; 
    if(categoryId){
        q = query(collection(db, "products"), where('categoryId', '==', categoryId))
    } else {
        q = query(collection(db, "products"))
        
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc =>({
        id: doc.id,
        ...doc.data()
    }))
    return dataFromFirestore
}

export const firestoreFetchOnlyDoc = async (id) =>
{//revisar
    /*const q = query(collection(db, "products"))
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc =>({
        id: doc.id,
        ...doc.data()
    }))
    const elemento = dataFromFirestore.find(item => item.id === id)
    console.log(elemento);
    return elemento;*/
    const docRef = doc(db, "products", id);
    const querySnapshot = await getDoc(docRef)
        .then(doc =>({
            id: doc.id,
            ...doc.data()
        }))
    return querySnapshot
}