import { Hello } from '../src';

test('hello-integration', () => {
  expect(new Hello().sayHello()).toBe('hello, world!');
});