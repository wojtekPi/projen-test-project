import { Hello } from '../src';

test('hello-component', () => {
  expect(new Hello().sayHello()).toBe('hello, world!');
});