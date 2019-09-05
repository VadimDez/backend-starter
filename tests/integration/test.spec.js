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

	describe('Validation', () => {
		it('should return validation error', () => {
			return request(app)
				.post('/v1/objects')
				.expect(400);
		});

		it('should return succes on passing all required body params', () => {
			return request(app)
				.post('/v1/objects')
				.send({
					name: "Obj name"
				})
				.expect(200);
		});
	});
});