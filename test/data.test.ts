import crypto from "crypto";
import { AccountDAODatabase } from "../src/data";

test("Deve salvar uma account", async function() {
    const accountDAO = new AccountDAODatabase();
    const account = {
        accountId: crypto.randomUUID(),
        name: "John Doe",
        email: `john.doe${Math.random()}@example.com`,
        cpf: "97456321558",
        password: "asdQWE123",
        isPassenger: true
    };
    await accountDAO.saveAccount(account);
    const accountByEmail = await accountDAO.getAccountByEmail(account.email);
    expect(accountByEmail.name).toEqual(account.name);
    expect(accountByEmail.email).toEqual(account.email);
    expect(accountByEmail.cpf).toEqual(account.cpf);
    expect(accountByEmail.password).toEqual(account.password);
    const accountById = await accountDAO.getAccountById(account.accountId);
    expect(accountById.name).toEqual(account.name);
    expect(accountById.email).toEqual(account.email);
    expect(accountById.cpf).toEqual(account.cpf);
    expect(accountById.password).toEqual(account.password);
});
