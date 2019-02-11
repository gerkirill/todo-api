var request = require('supertest');

describe('users component', function () {
  var server;

  beforeEach(function () {
    delete require.cache[require.resolve('../../bin/www')];
    server = require('../../bin/www');
  });

  afterEach(function (done) {
    server.close(done);
  });

  it('responds to /users', function testUsers(done) {
    request(server)
      .get('/users')
      .expect('respond with a resource')
      .expect(200, done);
  });
});