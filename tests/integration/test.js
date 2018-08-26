/**
 * Created by Vadym Yatsyuk on 11.08.18
 */
const app = require('../../index');
const request = require('supertest').agent(app.listen());
const { expect } = require('chai');

describe('sample test', () => {
	it('should pass', () => {
		return request
			.get('/v1/test')
			.expect(200)
			.then((res) => {
				expect(res.body).to.deep.equal({ status: 'ok' });
			});
	});


	it('should return 200 when accessing protected route with no auth header (only for test env)', () => {
		return request
			.get('/v1/protected')
			.expect(200);
	});
});