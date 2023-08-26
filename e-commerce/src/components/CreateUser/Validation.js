const validate = (form, errorsState) => {
  const errors = { ...errorsState };

  // name
  if (!form.name) errors.name = "";
  else if (form.name.length < 3)
    errors.name = "Debe de tener mas de 3 caracteres";
  else {
    errors.name = "";
  }

  // lastname
  if (!form.lastname) errors.lastname = "";
  else if (form.lastname.length < 3)
    errors.lastname = "Debe de tener mas de 3 caracteres";
  else {
    errors.lastname = "";
  }

  //password
  if (!form.password) errors.password = "";
  else if (form.password.length < 6)
    errors.password = "Debe de tener mas de 6 letras";
  else errors.password = "";

  //confirm pasword
  if (!form.repeatPassword) errors.repeatPassword = "";
  else if (form.repeatPassword !== form.password)
    errors.repeatPassword = "Las contraseñas no coinciden";
  else errors.repeatPassword = "";

  return errors;
};

export default validate;
