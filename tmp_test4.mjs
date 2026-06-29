const afterD = "All of the statements are correct.\n\nAnswer: A\n\nExplanation:\n\nMgmt.";
const ansRe = /(?:^|\n)?\s*(?:answer|ans|correct(?:\s+answer)?|correct\s+option)\s*[:.\-)]?\s*(.+?)(?=\n\s*(?:explanation|explain|solution|reason)\s*[:.\-)]|$)/i;
const m = ansRe.exec(afterD);
console.log("match:", JSON.stringify(m));
console.log("index:", m?.index);
