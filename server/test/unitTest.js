var assert = require('assert');
var http = require('http');
// unit tests for server
describe('Tests for Server', () => {
  // logging before and after the tests
  before(function() {console.log("before test")});
  after(function() {console.log("after test")});
  // Testing connection on auth route
  describe('/api/auth', ()=> {
    it('should login to the account', function() {
      http.get('http://localhost:3000', function(res) {
        assert.equal(res.statusCode, 200);

        var body = '';
        res.on('data', function(d) {body += d});
        res.on('end', function() {
          assert.equal(body, 'Hello');
        })
      })
    })
  });
});