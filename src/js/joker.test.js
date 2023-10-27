import { dadJoke } from './joker.js';

async function testDadJoke() {
  const joke = await dadJoke();
  const testPasses = Boolean(joke);
  console.log(joke);
  console.log('Dad Joke Test:', testPasses ? 'PASSED' : 'FAILED');
  return testPasses;
}

testDadJoke();

test('It adds 1 and 2 and gets 3 as a result', () => {
  expect(1 + 2).toEqual(3);
});
