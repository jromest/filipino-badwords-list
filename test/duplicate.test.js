const list = require("../lib/index");

function hasDuplicates(array) {
  var valuesSoFar = Object.create(null);
  for (var i = 0; i < array.length; ++i) {
    var value = array[i];
    if (value in valuesSoFar) {
      return true;
    }
    valuesSoFar[value] = true;
  }
  return false;
}

test("No duplicates", () => {
  expect(hasDuplicates(list.array)).toBe(false);
});
