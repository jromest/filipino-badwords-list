# filipino-badwords-list

A highly consumable list of bad (profanity) filipino words.

Inspired by [badwords-list](https://github.com/web-mech/badwords-list)

This data has been exposed as an object that contains

- an array
- an object
- a regular expression

depending on what is required for your purposes.

# Install

```
npm install filino-badwords-list
```

# Usage

```js
const list = require("filipino-badwords-list"),
  array = list.array,
  object = list.object,
  regex = list.regex;
```

# Testing

#### Requires

- Jest

```
npm test
```
