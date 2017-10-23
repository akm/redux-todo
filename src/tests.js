import expect from 'expect'

console.log("Test started.")

const addCounter = (list) => {
  list.push(0);
  return list
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];
  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

testAddCounter()
console.log("Test passed.")