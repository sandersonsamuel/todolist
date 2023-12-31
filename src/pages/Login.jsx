import { useState } from "react";
import landingLogo from "../assets/notesIMG.svg";
import { auth } from "../configs/FirebaseConfig";
import { signInWithEmailAndPassword, updateProfile} from "firebase/auth";

export function Login() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  async function sigIn(event) {
    event.preventDefault()

    try {
      await signInWithEmailAndPassword(auth, email, password)
    }catch (error) {
      setError("Erro ao Logar: " + error.message);
    }
    
  }

  return (
    <>
      <div className="md:flex p-5 sm:p-10 justify-center items-center h-screen w-screen gap-20">
        <div className="flex gap-5 md:gap-0 md:block justify-center mb-10 md:mb-0">
          <img src={landingLogo} className="w-16 md:w-96 md:block" alt="" />
          <h1 className="text-center flex items-center sm:block text-3xl sm:text-5xl text-purple-600">
            To-do List
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <form onSubmit={sigIn} className="flex flex-col sm:shadow-custom w-96 h-[35rem] rounded-lg p-9 gap-5">
            <h1 className="text-3xl text-center font-semibold">Login</h1>

            <input
              type="email"
              className="w-full h-12 outline-none border-2 border-slate-300 rounded-md p-5"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <input
              type="password"
              className="w-full h-12 outline-none border-2 border-slate-300 rounded-md p-5"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />

            <input
              type="submit"
              className="w-full bg-purple-600 h-12 rounded-md text-white cursor-pointer hover:bg-[#8542c4]"
              value={"Entrar"}
            />

            {error && <p className="text-center text-red-600">{error}</p>}

            <button className="w-full text-blue-700 h-12 shadow-custom border-2 hover:bg-slate-200 border-slate-300 rounded-md space-x-3 flex items-center justify-center">
              <i className="fa-brands fa-google"></i>

              <p>Entre com o Google</p>
            </button>

            <a href="/Login" className="text-center text-blue-600 cursor-pointer">
              Não tenho uma conta
            </a>
          </form>
        </div>
      </div>
    </>
  );
}
