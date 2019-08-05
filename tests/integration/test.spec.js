/**
 * Created by Vadym Yatsyuk on 11.08.18
 */
const app = require('../../index');
const request = require('supertest');

describe('sample integration tests', () => {
	it('should pass', () => {
		return request(app)
			.get('/v1/health')
			.expect(200)
			.then((res) => {
				expect(res.body).toEqual({
					status: 'ok'
				});
			});
	});


	it('should return 200 when accessing protected route with no auth header (only for test env)', (done) => {
		return request(app)
			.get('/v1/protected')
			.expect(200)
			.then(() => {
				done();
			});
	});
});