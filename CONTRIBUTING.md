# Contributing Guidelines

Hello!

Let's make the web a better place. Happy Contributing!!!

## Here are some ways you can help

1. If you know any Filipino bad word(s) and it is not on the list, you can add them. _No coding required_. Just follow this [instructions](https://github.com/jromest/filipino-badwords-list/blob/master/CONTRIBUTING.md#how-to-add-bad-words-to-the-list).
2. Found a typo or grammar error in the documentation? Feel free correct them.
3. Found a bug or just asking a question? Feel free to create an [issue](https://github.com/jromest/filipino-badwords-list/issues), or;
4. You can contribute anything to improve this project.

## Requirements

Please make sure you have these installed on your machine:

- NodeJS
- Git

### Here are the step to begin contributing

1. Fork this repo
2. Clone your forked repo `git clone https://github.com/<your-github-username-here>/filipino-badwords-list.git`
3. Run `npm install` in your terminal
4. Create a branch `git checkout -b <name-of-your-branch>`
5. Open your favorite text editor, and add or make your edits
6. If all things are good or if you are just [adding bad words](https://github.com/jromest/filipino-badwords-list/blob/master/CONTRIBUTING.md#how-to-add-bad-words-to-the-list) that are not on the list, you can commit your changes and push it to your forked repo and create a [pull request](https://github.com/jromest/filipino-badwords-list/pulls)

### How to add bad words to the list

Be sure to read and follow the [Requirements](https://github.com/jromest/filipino-badwords-list/blob/master/CONTRIBUTING.md#requirements) above and follow the instructions below.

- Append your bad word enclosed in double quotes in the `filipino-badwords-list.js` file under the `src` directory. Make sure to add a comma before it. If multiple words, separate them with commas.
- Run `npm run sort`
  - it will check if your bad words hasn't been added, if so, it will sort the array alphabetically for you.
- Run the test `npm test`
- Create your [pull request](https://github.com/jromest/filipino-badwords-list/pulls) and wait for it to be merged.
