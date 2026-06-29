import { parseMcqText } from './src/lib/mcq-parse.ts';
const txt = `28. Consider the following statements regarding the contents of an engagement letter:

I. It must explain management's responsibility for financial statements.

II. It must explain the auditor's responsibility for the audit report.

III. It must include the exact fee amount for the next five years.

A. Statements I and II only are correct.

B. Statements II and III only are correct.

C. Statements I and III only are correct.

D. All of the statements are correct.

Answer: A

Difficulty: DIFFICULT

Explanation:

Management's responsibility.`;
console.log(JSON.stringify(parseMcqText(txt), null, 2));
