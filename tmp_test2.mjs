const afterD = "\n\nAnswer: A\n\nExplanation:\n\nManagement's responsibility.";
const ansRe = /(?:^|\n)?\s*(?:answer|ans|correct(?:\s+answer)?|correct\s+option)\s*[:.\-)]?\s*(.+?)(?=\n\s*(?:explanation|explain|solution|reason)\s*[:.\-)]|$)/i;
console.log(JSON.stringify(ansRe.exec(afterD)));
