# Expense Report

The ExpenseReport legacy code refactoring kata in various languages.

This is an example of a piece of legacy code with lots of code smells.
The goal is to support the following new feature as best as you can:

* Add Lunch with an expense limit of 2000.

## Process

1. 📚 Read the code to understand what it does and how it works.
2. 🦨 Read the code and check for design and code smells. Make a list of all code and design smells that you find.
3. 🧑‍🔬 Analyze what you would have to change to implement the new requirement without refactoring the code.
4. 🧪 Write a characterization test. Expand your list of code and design smells. Add those smells that you missed earlier and discovered now because they made your life writing a test miserable.
5. 🔧 Refactor the code.
6. 🔧 Refactor the test.
7. 👼 Test-drive the new feature.

## Solutions

To see solutions, switch to the [solutions branch](https://github.com/christianhujer/expensereport/tree/solutions#solutions).

**Warning** The solutions branch will be rebased!

## Credits and License

I first encountered the ExpenseReport example during a bootcamp at Equal Experts.
I also have seen the ExpenseReport example being used by Robert "Uncle Bob" C. Martin.
However, he seems to not be the original author (<https://twitter.com/unclebobmartin/status/1537063143326855176?s=20&t=lh_vVb9jUQmY6PYG50974w>)
I have tried to research its origins but so far I have failed.
If you know who has first come up with this example, please get in touch with me.

As I was asked for the license conditions, I have decided to put this under CC-BY-SA, with the following considerations:

* Please credit me, last but not least to retain the opportunity for people to experience this exercise in as many programming languages as they are interested in.
* Share it under the same license.
* Using this as training material should be allowed, even if the trainer is charging money for their time.

---

## Typescript

The ExpenseReport refactoring example in TypeScript.

## Technologies used

1. Typescript as the main programming language
2. Jest as the testing framework
3. Eslint as the linting tool
4. Prettier as the formatting tool

## Prerequisites

1. NVM installed on your machine from [here](https://github.com/nvm-sh/nvm)

## Setup instructions

```shell
./configure.sh  # will use nvm to install and activate the appropriate version of node
npm test # will run all the tests
npm bulid # will create a build of the project
node build/output.js # will run the compiled output
npm run format:check # runs the linter and formatter rules
npm run format:fix # applies a fix to the fixable issues 
```
