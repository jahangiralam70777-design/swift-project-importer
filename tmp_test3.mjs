import { parseMcqText } from './src/lib/mcq-parse.ts';
// simulate just block without prelude
const txt = `28. Consider the following statements regarding the contents of an engagement letter:

I. It must explain management's responsibility for financial statements.

A. Statements I and II only are correct.

B. Statements II and III only are correct.

C. Statements I and III only are correct.

D. All of the statements are correct.

Answer: A

Explanation:

Mgmt.`;
console.log(JSON.stringify(parseMcqText(txt), null, 2));
