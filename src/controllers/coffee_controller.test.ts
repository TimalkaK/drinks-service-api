import request from 'supertest';
import { app } from '../app';


// As a user, when I do a GET request to the /coffee endpoint, I will see the JSON response which includes two properties: the drinkType set to “Coffee” and name set to the provided name
test('GET /coffee should return correct object', async () => {
const res = await request(app)
.get('/coffee')
.query({ coffeeName: 'Latte' });
expect(res.statusCode).toEqual(200);
expect(res.body).toEqual({
drinkType: 'Coffee',
name: 'Latte',
});
});