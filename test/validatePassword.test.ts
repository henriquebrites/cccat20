import { validatePassword } from "../src/validatePassword";

test.each([
  "asdFGH123",
  "asdG123456",
  "aG1aG129999"
])("Must validate password %s", function (password: string) {
  const isValid = validatePassword(password);
  expect(isValid).toBe(true);
});

test.each([
  "",
  "asD123",
  "12345678",
  "asdfghjkl",
  "ASDFGHJKL",
  "asdfg123456"
])("Must not validate password %s", function (password: string) {
  const isValid = validatePassword(password);
  expect(isValid).toBe(false);
});