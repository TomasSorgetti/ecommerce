import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import validate from "./Validation";
const CreateUser = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="w-[600px] flex flex-col gap-6">
        <div>
          <FloatingLabel controlId="floatingInput" label="Nombre">
            <Form.Control
              type="text"
              placeholder="John"
              onChange={handleChange}
              value={form.name}
              name="name"
            />
          </FloatingLabel>
          {errors.name !== "" && <span>{errors.name}</span>}
        </div>
        <div>
          <FloatingLabel controlId="floatingInput" label="Apellido">
            <Form.Control
              type="text"
              placeholder="Doe"
              onChange={handleChange}
              value={form.lastname}
              name="lastname"
            />
          </FloatingLabel>
          {errors.lastname !== "" && <span>{errors.lastname}</span>}
        </div>
        <div>
          <FloatingLabel controlId="floatingInput" label="Correo Electrónico">
            <Form.Control
              type="text"
              placeholder="name@example.com"
              onChange={handleChange}
              value={form.email}
              name="email"
            />
          </FloatingLabel>
          {errors.email !== "" && <span>{errors.email}</span>}
        </div>
        <div>
          <FloatingLabel controlId="floatingPassword" label="Contraseña">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={form.password}
              name="password"
            />
          </FloatingLabel>
          {errors.password !== "" && <span>{errors.password}</span>}
        </div>
        <div>
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
          {errors.repeatPassword !== "" && <span>{errors.repeatPassword}</span>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default CreateUser;
