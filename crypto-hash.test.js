const cryptoHash = require("./crypto-hash");

describe("cryptoHash()", () => {
  const hashed =
    "0b198ecb2a56b9f4765f9d9e0a8adb2c6d8231f17b2ed8abce9fb12512937c78";
  it("generates a SHA-256 hash output", () => {
    expect(cryptoHash("block chain")).toEqual(hashed);
  });
  it("produces the same hash with the same input parameters of any order", () => {
    expect(cryptoHash("one", "two", "three")).toEqual(
      cryptoHash("three", "one", "two")
    );
  });
});
