const mongooes = require('mongoose');

mongooes.Promise = global.Promise;

before((done) => {
  mongooes.connect('mongodb://localhost/user_test');
  mongooes.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn(`Warning: ${error}`);
    });
});


  beforeEach((done) => {
    mongooes.connection.collections.users.drop(() => {
      // Ready to run next test
      done();
    });
  });