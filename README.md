# filipino-badwords-list

A highly consumable list of bad (profanity) filipino words.

Inspired by [badwords-list](https://github.com/web-mech/badwords-list).

This data has been exposed as an object that contains:

- an array
- an object
- a regular expression

depending on what is required for your purposes.

## Install

```
npm i filipino-badwords-list
```

## Usage

```js
const filipinoBadwords = require("filipino-badwords-list"),
  array = filipinoBadwords.array,
  object = filipinoBadwords.object,
  regex = filipinoBadwords.regex;
```

### Usage with `bad-words`

You can use [bad-words](https://www.npmjs.com/package/bad-words) a javascript filter for badwords to filter filipino and english bad words.

#### Installation

```
npm i bad-words
```

#### Usage

```js
const Filter = require("bad-words");
const filipinoBadwords = require("filipino-badwords-list");

const filter = new Filter({ list: filipinoBadwords.array });

console.log(filter.clean("tangina, wag kang bobo")); // *******, wag kang ****
```

## Testing

#### Requires

- Jest

```
npm test
```

## Contributing

If you know filipino bad word(s), please contribute to grow our list of filipino bad words and make the web a better place.

[Please follow these steps to contribute](https://github.com/jromest/filipino-badwords-list/blob/master/CONTRIBUTING.md)

## License

MIT
