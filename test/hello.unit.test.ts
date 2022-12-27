import { Hello } from '../src';

test('hello-unit', () => {
  expect(new Hello().sayHello()).toBe('hello, world!');
});