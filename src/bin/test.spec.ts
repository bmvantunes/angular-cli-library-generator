import { add } from './test';
import { expect } from 'chai';

describe('just to prove that unit testing is working - remove next commit', () => {
  it('should be sum', () => {
    expect(add(1,2)).to.equal(3);
  });
});
