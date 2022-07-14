const uppercase = require('./exercise-7');

describe('test uppercase function at exercise-7', () => {
  test('if uppercase function turns a string into uppercase and returns it', (done) => {
    expect(uppercase('será?', 500)).toBe('SERÀ?');
  });
})