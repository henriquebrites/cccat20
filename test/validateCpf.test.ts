import { validate } from "../src/validateCpf";

test.each([
    "97456321558",
    "71428793860",
    "974.563.215-58",
    "714.287.938-60"
])("Must validate a CPF %s", function (cpf: string) {
    const isValid = validate(cpf);
    expect(isValid).toBe(true);
});

test.each([
    "",
    undefined,
    null,
    "22222222222"
])("Must not validate a CPF %s", function (cpf: any) {
    const isValid = validate(cpf);
    expect(isValid).toBe(false);
})
