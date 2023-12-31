import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import validate from "./Validation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateUser = ({ activeChange }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors(validate({ ...form, [name]: value }, errors));
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = "http://localhost:3001/user";
    if (form.name && form.lastname && form.email && form.password && form.repeatPassword && errors.name ==="" && errors.lastname ==="" && errors.email ==="" && errors.password ==="" && errors.repeatPassword ==="") {
      try {
        const res = await axios.post(URL, form);
        if (res.status !== 200) throw "Error al crear usuario";
        const token = res.data.token;
        localStorage.setItem("token", token);
        if (typeof token === "string") {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[500px] flex flex-col gap-6 border py-6 rounded"
    >
      <div className="flex flex-col gap-6 items-center">
        <h1>Register</h1>
        <div className="w-8/12 mx-auto flex flex-col gap-4">
          <div className="">
            <FloatingLabel controlId="floatingInput" label="Nombre">
              <Form.Control
                type="text"
                placeholder="John"
                onChange={handleChange}
                value={form.name}
                name="name"
              />
            </FloatingLabel>
            {errors.name !== "" && <span className="">{errors.name}</span>}
          </div>
          <div className="relative">
            <FloatingLabel controlId="floatingInput" label="Apellido">
              <Form.Control
                type="text"
                placeholder="Doe"
                onChange={handleChange}
                value={form.lastname}
                name="lastname"
              />
            </FloatingLabel>
            {errors.lastname !== "" && (
              <span className="absolute bottom-0 left-0">
                {errors.lastname}
              </span>
            )}
          </div>
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
            {errors.email !== "" && (
              <span className="absolute bottom-0 left-0">{errors.email}</span>
            )}
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
            {errors.password !== "" && (
              <span className="absolute bottom-0 left-0">
                {errors.password}
              </span>
            )}
          </div>
          <div className="relative">
            <FloatingLabel
              controlId="floatingPassword"
              label="Confirmar Contraseña"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={form.repeatPassword}
                name="repeatPassword"
              />
            </FloatingLabel>
            {errors.repeatPassword !== "" && (
              <span className="absolute bottom-0 left-0">
                {errors.repeatPassword}
              </span>
            )}
          </div>
          <span>
            ¿Ya tienes cuenta?
            <button onClick={activeChange}>Entra</button>
          </span>
        </div>
        <button className="px-6 py-2 bg-blue-500 rounded" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default CreateUser;
