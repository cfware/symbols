# @cfware/symbols [![NPM Version][npm-image]][npm-url]

An iterator which generates Symbol's

## Usage

```js
import Symbols from '@cfware/symbols';

export [Bar1, Bar2] = Symbols;

export class Foo {
	[Bar1] = 'protected field';
	[Bar2]() {
		return 'protected method';
	}
}
```

This allows declaration of protected fields.  A primary goal is to be terser friendly,
the `Bar1` field will be safely shortened even when it is used across sources.

[npm-image]: https://img.shields.io/npm/v/@cfware/symbols.svg
[npm-url]: https://npmjs.org/package/@cfware/symbols
