import assert from 'assert';
import 'babel-polyfill';

describe('tests', () => {
  it('1 + 1 = 2', () => {
    assert.equal(1+1, 2);
  });
});

describe('es6 tests', () => {
   it('Object.assign works', () => {
       let a = { a: 'a' };
       let b = { b: 'b' };
       let c = Object.assign(a, b);
       assert.equal(a, c);
   });

   let p = new Promise((resolve, reject) => {
           setTimeout(
               () => {
                    resolve(true);
                }, 0);
        });

   it('Promise works', (done) => {
        p.then((value) => {
            assert.equal(value, true);
            done();
        });
   });

   it('async works', (done) => {
       (async () => {
           let value = await p;
           assert.equal(value, true);
           done();
       })();
   });
});