import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCUgTi6rcBcNu9eiuIGYEwxUO6CJmoqbjI",
  authDomain: "financial-web-tracker.firebaseapp.com",
  projectId: "financial-web-tracker",
  storageBucket: "financial-web-tracker.firebasestorage.app",
  messagingSenderId: "1063774958765",
  appId: "1:1063774958765:web:51420cb4621ebdd53e4224",
  measurementId: "G-3FFSS2EJ00"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app



