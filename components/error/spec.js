var request = require('supertest');

describe('error component', function () {
  var server;

  beforeEach(function () {
    delete require.cache[require.resolve('../../bin/www')];
    server = require('../../bin/www');
  });

  afterEach(function (done) {
    server.close(done);
  });

  it('responds to /non-existing-route with 404 error page', function testSlash(done) {
    request(server)
      .get('/non-existing-route')
      .expect(/Not Found/)
      .expect(404, done);
  });
});