# Developer notes (v0.11)

## Files
- `game.src.html` — the source of truth. Thai/English text lives in the code as `X('ไทย','English')`. UI strings live in `LANG.th` / `LANG.en`.
- `i18n/*.tsv` — translations for zh, ja, ko, de, es. Lines are `ID<TAB>text`. `S0000…` = static strings, `T000…` = templates with `{0}` slots, `U.key` = UI keys. Files are read in sorted order; later files override earlier ones.
- `strings.json` + `i18n/items.json` — the id table. **Ids never move**; new strings are appended.
- `build_i18n.py` — injects all translations into the HTML → `../index.html`.
- `extract.py` — finds every X() string and template in `game.js`.
- `add_strings.py` — after an edit, appends new strings with fresh ids and writes `i18n/new_src.txt` to translate.
- `blocks/` — how chapters 04 (v0.9), 05 Egypt (v0.10, code chapter 6) and sound (v0.11) were added: block files + the patch scripts that inserted them (historical reference; they ran against older base files).
- `test/` — node simulations (`sim10.cjs` = Egypt stats, `scenes10.cjs` = draws 1,800 scenes, `cov6c.cjs` = untranslated-text check, `ui2.cjs N` = full UI loop for chapter N, `sndtest.cjs` = renders each sound offline and checks for NaN/clipping; needs playwright).

## Workflow
1. Edit `game.src.html`.
2. `./build.sh`
3. `python3 add_strings.py` → translate lines in `i18n/new_src.txt` into `i18n/<lang>_<name>.tsv` (keep `{0}` slots and leading spaces).
4. New UI keys: add to `LANG.th` and `LANG.en`, run `node test/dumplang2.cjs` (from `dev/`) to refresh `lang_en.json`, add `U.key` lines per language.
5. `./build.sh` again, then tests: `LG=ja node test/cov6c.cjs`, `node test/sim10.cjs`, `node test/scenes10.cjs`, `LG=th node test/ui2.cjs 6`.

## Gotchas
- Templates match whole English strings by pattern. A template that is mostly slots (e.g. `{0} to {1}`) will swallow unrelated sentences — avoid short generic templates.
- Chapter ids in code: 1, 2, 3, 4 (Mesopotamia), 6 (Egypt, shown as 05), 5 (Pacific, shown as 06). `civ(ch)` = 4 or 6.
- Sound: `SND` module (search `v0.11 SOUND`). Modes stored in `sit.snd`: 2 music+sound, 1 sound only, 0 off. Audio starts only after a user gesture.
