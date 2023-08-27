import CreateUser from "../../components/CreateUser/CreateUser"
import LoginForm from "../../components/Login/LoginForm"
import {useState} from "react"
const Login = () => {
  const [active, setActive] = useState(true)
  const activeChange = () => {
    setActive(!active)
  }
  return (
    <main className="w-full h-screen flex items-center justify-center">
      {active ?
      <LoginForm activeChange={activeChange}/>
      :<CreateUser  activeChange={activeChange}/>
    }
    </main>
  )
}

export default Login