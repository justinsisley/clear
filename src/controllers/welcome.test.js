import welcomeHandler from './welcome';

test('returns a welcome message', () => {
  const jsonMock = jest.fn();

  welcomeHandler({}, { json: jsonMock });

  expect(jsonMock.mock.calls.length).toBe(1);
  expect(jsonMock.mock.calls[0][0].message).toBe('Welcome!');
});
