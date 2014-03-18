# reconnect-shoe

Reconnect a [shoe](https://github.com/substack/shoe) stream when it goes down.

## Usage

The server:

``` js

var http = require('http');
var shoe = require('shoe');

var server = http.createServer(function (req, res) {
  // ...
});
server.listen(9999);

var sock = shoe(function (stream) {
  stream.write('Hello, comrade.');
});

sock.install(server, '/salutations');
```

The client:
``` js

var reconnect = require('reconnect-shoe');

reconnect(function(stream){
  stream.on('data', console.log.bind(console, 'Server told:'));
  // => Server told: Hello comrade.
}).connect('/salutations');
```

For the events you can listen to, see
[reconnect-core](https://github.com/juliangruber/reconnect-core#usage).

## Installation

With [npm](https://npmjs.org) do:

```
npm install reconnect-shoe
```

## License

(MIT)

Copyright (c) 2014 Andrey Filonenko andrey.filonenko@aol.com

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
