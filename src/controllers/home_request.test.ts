import request from 'supertest';
import { app } from '../app';
// ⚠️ This should error as "../app" doesn't exist yet!
describe('Test home API endpoint request', () => {

// As a user, when I do a GET request to the / endpoint, I will see a string message as a response which says Welcome to the Drinks API!
test('GET should return correct message for / endpoint', async () => {
const res = await request(app).get('/');
expect(res.statusCode).toEqual(200);
expect(res.text).toEqual('Welcome to the Drinks API!');
//expect(res.text).toEqual('This should fail!');
});

//As a user, when I do a GET request to the /coffeelover endpoint, I will see a string message as a response which says I like coffee!

test('GET should return correct message for /coffeelover endpoint', async () => {
  const res = await request(app).get('/coffeelover');
  expect(res.statusCode).toEqual(200);
  expect(res.text).toEqual('I like coffee!');
  //expect(res.text).toEqual('This should fail!');
  });

test('GET should return correct message for /tea endpoint', async () => {
  const res = await request(app).get('/tea');
  expect(res.statusCode).toEqual(200);
  expect(res.text).toEqual('I love tea!');
  });
});