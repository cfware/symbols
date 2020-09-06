import t from 'libtap';

import Symbols from '@cfware/symbols';

t.type(Symbols[Symbol.iterator], 'function');
t.ok('next' in Symbols[Symbol.iterator]());
const [s1, s2] = Symbols;
t.type(s1, 'symbol');
t.type(s2, 'symbol');
t.strictNotSame(s1, s2);
