import axios from "axios";

axios .defaults.validateStatus = () => true;

test("Deve fazer a criação da conta de um usuário do tipo passageiro", async function () {
  const input = {
    name: "John Doe",
    email: `john.doe${Math.random()}@example.com`,
    cpf: "97456321558",
    password: "asdQWE123",
    isPassenger: true
  }
  const responseSignup = await axios.post("http://localhost:3000/signup", input);
  const outputSignup = responseSignup.data;
  expect(outputSignup.accountId).toBeDefined();
  const responseGetAccounts = await axios.get(`http://localhost:3000/accounts/${outputSignup.accountId}`);
  const outputGetAccounts = responseGetAccounts.data;
  expect(outputGetAccounts.name).toEqual(input.name);
  expect(outputGetAccounts.email).toEqual(input.email);
  expect(outputGetAccounts.cpf).toEqual(input.cpf);
  expect(outputGetAccounts.password).toEqual(input.password);
  expect(outputGetAccounts.is_passenger).toEqual(input.isPassenger);
});

test("Não deve fazer a criação da conta de um usuário se o nome for inválido", async function () {
  const input = {
    name: "John",
    email: `john.doe${Math.random()}@example.com`,
    cpf: "97456321558",
    password: "asdQWE123",
    isPassenger: true
  }
  const responseSignup = await axios.post("http://localhost:3000/signup", input);
  expect(responseSignup.status).toBe(422);
  const outputSignup = responseSignup.data;
  expect(outputSignup.message).toBe("Invalid name");
});
