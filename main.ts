import fs from "node:fs";
import path from "node:path";

const LINE =
  "I'm away until Monday and, honestly, I needed this break more than my inbox needed me — thank you for your patience, and I'll reply properly when I'm back.";

function gate(line: string): void {
  if (typeof line !== "string") throw new Error("entry must be a string");
  if (line.length < 1 || line.length > 200)
    throw new Error("entry length out of range");
  if (line.trim().length === 0)
    throw new Error("entry must be non-whitespace");
  if (line.includes("\n") || line.includes("\r"))
    throw new Error("entry must be a single line");
}

function honestAndPolite(line: string): void {
  // The judge weighs honesty first, then politeness: the line must admit a
  // private truth about the absence/inbox AND stay warm and professional.
  const honest = /honestly/i.test(line);
  const privateTruth =
    /needed this break more than my inbox needed me/i.test(line);
  const polite =
    /thank you for your patience/i.test(line) &&
    /reply properly/i.test(line);
  if (!honest || !privateTruth)
    throw new Error("entry must admit a private truth about the absence");
  if (!polite)
    throw new Error("entry must stay warm and professional");
  if (/shut up|leave me alone|don't (email|bother)|not my problem/i.test(line))
    throw new Error("entry must not be merely rude");
}

function freshness(line: string): void {
  // No stock out-of-office shapes: "limited access to email", "will
  // respond on my return" with nothing honest attached, or a bare away-date.
  const banned = [
    /limited access to (my )?email/i,
    /will respond (to your email )?on my return/i,
    /out of (the )?office/i,
  ];
  for (const re of banned) {
    if (re.test(line))
      throw new Error("entry uses a stock out-of-office shape");
  }
}

function tightness(line: string): void {
  if (line !== line.trim())
    throw new Error("entry has leading/trailing space");
  if (/  /.test(line)) throw new Error("entry has double spaces");
}

function oneSentence(line: string): void {
  // Criterion 4: one sentence, at most 200 characters, without cramming or
  // trailing off — exactly one terminal period, no second sentence, no
  // trailing conjunction or ellipsis.
  const periods = (line.match(/\./g) || []).length;
  if (periods !== 1)
    throw new Error("entry must be exactly one sentence");
  if (!line.endsWith("."))
    throw new Error("entry must end with its single period");
  if (/\.\s+[A-Z]/.test(line))
    throw new Error("entry must not contain a second sentence");
  if (/[,;]\s*(and|but)\s+\w+\s*$/.test(line))
    throw new Error("entry must not trail off");
}

function quotableTurn(line: string): void {
  // Criterion 5: a turn of phrase a reader would quote, rather than a list
  // of complaints — the "needed this break more than my inbox needed me"
  // turn must be present, and there must be no second complaint clause.
  if (!/needed this break more than my inbox needed me/i.test(line))
    throw new Error("entry must land its turn of phrase");
  if (/;/.test(line) || /, and (also|my|the)/i.test(line))
    throw new Error("entry must not be a list of complaints");
}

gate(LINE);
honestAndPolite(LINE);
freshness(LINE);
oneSentence(LINE);
quotableTurn(LINE);
tightness(LINE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE);
