var request = require('supertest');

describe('todos component', function () {
  var server;

  beforeEach(function () {
    delete require.cache[require.resolve('../../bin/www')];
    server = require('../../bin/www');
  });

  afterEach(function (done) {
    server.close(done);
  });


  it('responds to /todos', function testTodos(done) {
    request(server)
      .post('/todos')
      .send({name: 'john'})
      .set('Accept', 'application/json')
      .set('Authorization', 'kirill6')
      .expect(200).then(_ => {
        request(server)
        .get('/todos')
        .set('Accept', 'application/json')
        .set('Authorization', 'kirill6')
        .expect('Content-Type', /json/)
        // .expect('respond with a resource')
        .expect(200)
        .end(function(err, res) {
          console.log(res);
          if (err) return done(err);
          done();
        });
      })    
  });
});