import usersHandler from './users';

test('returns an array of user objects', async () => {
  const jsonMock = jest.fn();

  await usersHandler({}, { json: jsonMock });

  expect(jsonMock.mock.calls.length).toBe(1);

  // Should be an array of user objects
  expect(jsonMock.mock.calls[0][0].length).toBe(10);

  // Check the first user for known properties
  expect(jsonMock.mock.calls[0][0][0]).toMatchObject({
    id: expect.any(Number),
    name: expect.any(String),
  });
});
