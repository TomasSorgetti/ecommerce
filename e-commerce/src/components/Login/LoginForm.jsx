import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ activeChange }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errorLogin, setErrorLogin] = useState("")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = "http://localhost:3001/user/login";
    try {
      const res = await axios.post(URL, form);
      if (res.status !== 200) throw "Error login";
      const token = res.data.token;
      localStorage.setItem("token", token);
      if (typeof token === "string") {
        navigate("/");
      }
    } catch (error) {
      setErrorLogin(error.response.data.error);
      console.log(error.response.data.error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[500px] flex flex-col gap-6 border py-6 rounded"
    >
      <div className="flex flex-col gap-6 items-center">
        <h1>Entrar</h1>
        {errorLogin !== "" && <span>{errorLogin}</span>}
        <div className="w-8/12 mx-auto flex flex-col gap-4">
          <div className="relative">
            <FloatingLabel controlId="floatingInput" label="Correo Electrónico">
              <Form.Control
                type="text"
                placeholder="name@example.com"
                onChange={handleChange}
                value={form.email}
                name="email"
              />
            </FloatingLabel>
          </div>
          <div className="relative">
            <FloatingLabel controlId="floatingPassword" label="Contraseña">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={form.password}
                name="password"
              />
            </FloatingLabel>
          </div>
          <div>
            <span>¿No tienes cuenta?</span>
            <button onClick={activeChange}>registrate</button>
          </div>
        </div>
        <button className="px-6 py-2 bg-blue-500 rounded" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
