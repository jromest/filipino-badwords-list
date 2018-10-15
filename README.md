# filipino-badwords-list

A highly consumable list of bad (profanity) filipino words.

Inspired by [badwords-list](https://github.com/web-mech/badwords-list)

This data has been exposed as an object that contains

- an array
- an object
- a regular expression

depending on what is required for your purposes.

## Install

```
npm i filino-badwords-list
```

## Usage

```js
const list = require("filipino-badwords-list"),
  array = list.array,
  object = list.object,
  regex = list.regex;
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
