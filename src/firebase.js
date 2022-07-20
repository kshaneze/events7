import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { initializeApp } from 'firebase/app'

import { ref, onUnmounted } from 'vue'

const firebaseConfig = {
  apiKey: 'AIzaSyC1hdayTdjxAxh-SNSao7cj0RBFHYvUIiU',
  authDomain: 'events7-64aad.firebaseapp.com',
  databaseURL:
    'https://events7-64aad-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'events7-64aad',
  storageBucket: 'events7-64aad.appspot.com',
  messagingSenderId: '5360722048',
  appId: '1:5360722048:web:6f693fcf6d2dbfee7c4665',
  measurementId: 'G-L9VS030902',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

// Storing collection
const eventsCollection = db.collection('events')

// Creating event - function
export const createEvent = (event) => {
  return eventsCollection.add(event)
}

// Get event - function
export const getEvent = async (id) => {
  const event = await eventsCollection.doc(id).get()
  return event.exists ? event.data() : null
}

// Update event - function
export const updateEvent = (id, event) => {
  return eventsCollection.doc(id).update(event)
}

// Delete event - function
export const deleteEvent = (id) => {
  return eventsCollection.doc(id).delete()
}

// Readind data from db + detect any change
export const useLoadEvents = () => {
  const events = ref([])
  const close = eventsCollection.onSnapshot((snapshot) => {
    events.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return events
}

// Exporting these funcitions so we can use them in other components
