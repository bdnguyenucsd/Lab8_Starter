// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('Tests a generic phone number. Should receive true', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('Tests a generic phone number. Should receive true', () => {
  expect(functions.isPhoneNumber('(987)-654-3210')).toBe(true);
});

test('Tests a irregular input as a phone number. Should receive false', () => {
  expect(functions.isPhoneNumber('123-456-789')).toBe(false);
});

test('Tests a irregular input as a phone number. Should receive false', () => {
  expect(functions.isPhoneNumber('(123)-456-789')).toBe(false);
});

test('Tests a generic email. Should receive true', () => {
  expect(functions.isEmail('johndoe@gmail.com')).toBe(true);
});

test('Tests a generic email. Should receive true', () => {
  expect(functions.isEmail('marysue@xyz.com')).toBe(true);
});

test('Tests a irregular email. Should receive false', () => {
  expect(functions.isEmail('123@1.2.3.com')).toBe(false);
});

test('Tests a irregular email. Should receive false', () => {
  expect(functions.isEmail('localhost')).toBe(false);
});

test('Tests a strong password. Should receive true', () => {
  expect(functions.isStrongPassword('x01082j3na_10')).toBe(true);
});

test('Tests a strong password. Should receive true', () => {
  expect(functions.isStrongPassword('x123457890')).toBe(true);
});

test('Tests a irregular strong password. Should receive false', () => {
  expect(functions.isStrongPassword('12345678910')).toBe(false);
});

test('Tests a irregular strong password. Should receive false', () => {
  expect(functions.isStrongPassword('01010001')).toBe(false);
});

test('Tests a date. Should receive true', () => {
  expect(functions.isDate('01/01/0001')).toBe(true);
});

test('Tests a date. Should receive true', () => {
  expect(functions.isDate('99/1/9999')).toBe(true);
});

test('Tests a irregular date. Should receive false', () => {
  expect(functions.isDate('11122021')).toBe(false);
});

test('Tests a irregular date. Should receive false', () => {
  expect(functions.isDate('11-12-2021')).toBe(false);
});

test('Tests hex color. Should receive true', () => {
  expect(functions.isHexColor('#000000')).toBe(true);
});

test('Tests hex color. Should receive true', () => {
  expect(functions.isHexColor('#ABCDEF')).toBe(true);
});

test('Tests irregular hex color. Should receive false', () => {
  expect(functions.isHexColor('#0FFFFL')).toBe(false);
});

test('Tests irregular hex color. Should receive false', () => {
  expect(functions.isHexColor('#GHIJKL')).toBe(false);
});