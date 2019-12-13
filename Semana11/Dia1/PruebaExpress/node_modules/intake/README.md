[![Build Status](https://travis-ci.org/brencon/intake.svg?branch=master)](https://travis-ci.org/brencon/intake) [![Coverage Status](https://coveralls.io/repos/brencon/intake/badge.svg?branch=master&service=github)](https://coveralls.io/github/brencon/intake?branch=master)

[![NPM](https://nodei.co/npm/intake.png)](https://nodei.co/npm/intake/)

# intake
JavaScript utilities and other helper methods for intake form applications.

## Overview
This module was created out of a need to access a global library of JavaScript helper functions targeted at assisting applications built around intake forms. This module includes several utilities to make building intake form applications easier, and provide consistency around how data is formatted.

## Methods
| Method          | Description   |
| --------------- |---------------|
| addLeadingZeros | Pads a number or string with zeros on the left |
| addYearsToDate | Adds years to a date |
| formatSSN | Formats a string of numbers as XXX-XX-XXXX |
| getDateDiff | Determines the numerical difference between two dates for a specific interval |
| isEmptyOrUndefined | Determines if an object is empty, null, or undefined |
| isNumeric | Determines if a string can be interpreted as numeirc |
| toBoolean | Returns true or false if given true/1 or false/0 as input regardless of type |
| toTitleCase | Capitalizes the first character of each word in a string |

### Examples
| Example | Returns |
| ------- | ------- |
| `intake.addLeadingZeros(1, 4)` | "0001" |
| `intake.addYearsToDate('9/1/2015', 10)` | "Mon Sep 01 2025 00:00:00 GMT-0700 (Pacific Daylight Time)" |
| `intake.formatSSN('123456789')` | "123-45-6789" |
| `intake.getDateDiff('1/1/2015', '1/2/2015', 'days')` | 1 |
| `intake.isEmptyOrUndefined('')` | true |
| `intake.isNumeric('ABC')` | false
| `intake.toBoolean('1')` | true
| `intake.toTitleCase('format this string to title case', true)` | "Format This String to Title Case" |

## Installation

### npm
`npm install intake -S`

### bower
`bower install intake -S`

## Tests
`npm test`

## Code Coverage
Code coverage is maintained using [Istanbul](http://gotwarlost.github.io/istanbul/) with [Coveralls](https://coveralls.io) reporting.

## Continuous Integration
Continuous integration provided by [Travis CI](https://travis-ci.org).

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## Community
Updates and discussions about this module can be found [@symBrendan on Twitter](https://twitter.com/symBrendan).

## Versioning
For transparency into a common release cycle to strive toward maintaining backward compatibility, intake is maintained under [the Semantic Versioning guidelines](http://semver.org/).

## Creator

**Brendan Conrad**

- <https://twitter.com/symBrendan>

## License
This project is licensed under the terms of the MIT license.
