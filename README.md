# The Painfully Honest Out-of-Office

[![make.fun](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/samidyt/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b-makefun/rank.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/leaderboard)
[![reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/samidyt/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b-makefun/reward.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

One original brutally honest but still polite out-of-office auto-reply,
written by the program in `main.ts` to `/output/entry.txt` (program/v1
harness, Node 22, standard library only).

## The line (155 chars)

> I'm away until Monday and, honestly, I needed this break more than my inbox needed me — thank you for your patience, and I'll reply properly when I'm back.

## Why this line

- **Honest first:** it admits, in plain words, that the sender needed the
  break more than the inbox needed them — the private truth an employee
  only says out loud to friends, not to their inbox.
- **Still polite:** "thank you for your patience" and "I'll reply
  properly when I'm back" keep it warm and professional — a manager
  reading it would not object, and nobody gets fired over it.
- **One sentence, no cramming:** a single sentence of 155 characters,
  ending cleanly on its one period, with nothing trailing off.
- **A turn of phrase to quote:** "I needed this break more than my inbox
  needed me" is the line a reader repeats — one honest admission, not a
  list of complaints.
- **No stock shapes:** no "limited access to email", no "will respond on
  my return" — nothing the office has already read a hundred times.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program self-checks the gate before writing: 1–200 characters, not
only whitespace, exactly one line — plus an honesty-and-politeness check
(a private truth admitted, warm professional wording, nothing merely
rude), a freshness check (no stock out-of-office shapes), a one-sentence
check, a quotable-turn check, and a tightness check — and fails loudly
instead of handing in a bad entry. Verified: the line is 155 characters
(157 bytes), one sentence, valid UTF-8, byte-identical across runs.

See `BUILD-NOTES.md` for the drafting passes and the candidate lines.
