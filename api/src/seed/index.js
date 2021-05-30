require('dotenv').config()
const User = require("../models/user");
const faker = require("faker");
const cpfUtils = require("gerador-validador-cpf");

require("../config/database");

(async () => {
  await User.remove();

  const promises = [...Array(20)].map(() => {
    const name = faker.name.firstName();
    const email = faker.internet.email();
    const cpf = cpfUtils.generate();

    return User.create({
      name,
      email,
      cpf,
    });
  });

  await Promise.all(promises);

  console.log("seed completed!");
  process.exit();
})();
