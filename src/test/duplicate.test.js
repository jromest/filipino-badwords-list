const list = require("../filipino-badwords-list");

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
  expect(hasDuplicates(list)).toBe(false);
});
