# htmlPartial
Quick helper to include html using js and custom tags.

## Why?
There's lot of times when you need to code a template and don't want to repeat your code in each file, like the header or footer, then, this helper helps you to test the templates using partials and later pick the template engine that's need it.

Also it works for browser extensions and plugins where performance is not an issue as big as easy maintenance 

## Usage
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
http-server
```

### Python

1. Run the server on selected folder:
```python
python -m SimpleHTTPServer
```