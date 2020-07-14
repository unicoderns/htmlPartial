# Unicoderns Html Partial

Quick helper to include html using js and custom tags.

## Table of Contents

- [Why](#why)
- [How to use it](#how-to-use-it)
- [Limitations](#limitations)
- [Run server](#run-server)
- [Bugs and features](#bugs-and-features)
- [Do you want to contribute?](#do-you-want-to-contribute)
- [Creators](#creators)
- [Community](#community)
- [Copyright and license](#copyright-and-license)

## Why?

There's lot of times when you need to code a template and don't want to repeat your code in each file, like the header or footer, then, this helper helps you to test the templates using partials and later pick the template engine that's need it.

Also it works for browser extensions and plugins where performance is not an issue as big as easy maintenance

## How to use it?

1. Import the js at the end of the html file
2. Add custom tag:

```html
<partial file="partials/ongoing.html"></partial>
```

## Limitations

Due to Chrome limitation to access iframes of files on the same PC that the js is running (allowed by Firefox), we decide to go with an ajax approach to this, please keep in mind, this means that you need to run the code in an extension or server in order to make it work.

## Run server

Due to the limitations you may need to launch an easy fast webserver to test, that's pretty easy, here a couple of options:

### Node

1. Install the library:

```javascript
sudo npm install http-server -g
```

2. Run the server on selected folder:

```javascript
http - server
```

### Python

1. Run the server on selected folder:

```python
python -m SimpleHTTPServer
```

## Bugs and Features

Do you have a bug or a feature request? Please first check if the issue you found hasn´t been solved yet [here](https://github.com/unicoderns/htmlPartial/issues). If you want to open a bug or request a new feature, please refer to our [contributing guidelines](https://github.com/unicoderns/htmlPartial/blob/master/CONTRIBUTING.md) and open your request [here](https://github.com/unicoderns/htmlPartial/issues).

## Do you want to contribute?

If you want to be part of this amazing project, please read through our [contributing guidelines](https://github.com/unicoderns/htmlPartial/blob/master/CONTRIBUTING.md) to know the process you should follow. The community will be glad to receive your contribution.

## Community

Stay in touch with all members of the community and get updates about Unicoderns's development. Follow us [on twitter](https://twitter.com/unicoderns).

## Copyright and license

Code and documentation Copyright 2018–2020 to Contributors and Unicoderns S.A. Code released under the MIT License.
