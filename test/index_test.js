let moduleRoot = '../es6';
if (process.env.TEST_RELEASE) {
  moduleRoot = '../dist';
}

const reqrud = require(moduleRoot);

describe('reqrud', () => {
  it('works', async () => {
    const result = await reqrud();
    result.should.be.equal(42);
  });
});

