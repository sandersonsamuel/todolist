import { useEffect, useState } from "react"
import { auth } from "../configs/FirebaseConfig"
import Login from "./Login";
import { onAuthStateChanged, signOut } from "firebase/auth";

export function Home(){

  const [isLoged, setIsLoged] = useState(false)

  console.log(auth.currentUser)

  const logOut = async() => {
    try {
        await signOut(auth)
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    const Logado = onAuthStateChanged(auth, (user)=>{
      if (user) {
        setIsLoged(true)
      }else{
        setIsLoged(false)
      }
    })
  },[])

  return(
    <>
      {
        !isLoged? (<Login/>) : (
          <>
            <h1>{auth.currentUser.displayName}</h1>
            <button onClick={logOut}>LogOUt</button>
          </>
        )
      }
    </>
  )
}