import { initializeApp } from "firebase/app";
import {getAuth}  from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAZ_MfDlHoLldC0BNfPSWRCf_8yW_Ruv7s",
  authDomain: "todolist-a737e.firebaseapp.com",
  projectId: "todolist-a737e",
  storageBucket: "todolist-a737e.appspot.com",
  messagingSenderId: "147366532851",
  appId: "1:147366532851:web:8efd84336f2f2479648986"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)