const { user } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const { ADMIN_PASSWORD, ADMIN_EMAIL, SECRET } = process.env;


//************* Create User ***************//

const createUser = async ({ name, lastname, email, password }) => {
    console.log(name,lastname,email,password);
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const adminUser = await user.create({
      name,
      lastname,
      email,
      password,
      role: "admin",
    });
    const token = jwt.sign({ id: adminUser.id, role: adminUser.role }, SECRET, {
      expiresIn: "1y",
    });
    return { token, role: adminUser.role };
  }
  const userCreated = await user.create({ name, lastname, email, password });
  const token = jwt.sign(
    { id: userCreated.id, role: userCreated.role },
    SECRET,
    {
      expiresIn: "1y",
    }
  );
  return { token, role: userCreated.role };
};


//************* Login User ***************//

const loginUser = async ({email,password}) => {
    const userVerification = await user.findOne({ where: { email } });
    if (userVerification) {
      const match = await bcrypt.compare(password, userVerification.password);
      if (match) {
        const token = jwt.sign(
          { id: userVerification.id, role: userVerification.role },
          SECRET,
          {
            expiresIn: "1y",
          }
        );
        return { token, id: userVerification.id, role: userVerification.role };
      }
      throw new Error("wrong password");
    }
    throw new Error("user doesn´t exist");
}


//************* Get User ***************//

const getUser = async (userId) => {
    const response = await user.findOne({ where: { id: userId } });
    if (!response) return;
    const { password, ...userWithoutSensitiveData } = response.toJSON();

    return userWithoutSensitiveData;
};

module.exports = {
  createUser,
  loginUser,
  getUser,
};
