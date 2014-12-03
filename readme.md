class-merge
===========

A simple tool for merging classes.

Installation
------------

Use something like [browserify](http://browserify.org) or [webpack](http://webpack.github.io) for extreme ease-of-use.
Simply run `npm install class-merge` and you can do `require('class-merge') in
code:

    var classMerge = require('class-merge')

For other scenarios, the raw code is only one small file and can easily be
bundled, extracted and included as you want it.


Usage
-----

Simply call it with strings, and it will concatenate them for you:

    classMerge('ab', 'cd', 'de fg') //-> 'ab cd de fg'

You can also give it an object containing a `className` property, which will
result in that being used. This makes it useful for using with [React](https://gist.github.com/sebmarkbage/a6e220b7097eb3c79ab7#merging-classes):

    classMerge('ab', { className: 'cd' }) //-> 'ab cd'

If it is passed null, it will simply ignore it. This means that you can pass in
external vars and options-objects without guarding:

    var other = null
    classMerge('ab', { }, other) //-> 'ab'

It will always return a string:

    classMerge(null) //-> ''
