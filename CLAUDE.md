# Sapiens in Time — instructions for Claude

- The playable game is `index.html` (built file, do not hand-edit). The source is `dev/game.src.html`.
- Read `dev/NOTES.md` (build + translation workflow) and `dev/DESIGN.md` (design doc, chapter plans) before changing anything.
- Build with `cd dev && ./build.sh`; after adding text run `python3 add_strings.py` and translate `i18n/new_src.txt` into zh, ja, ko, de, es.
- Owner talks in Thai; reply in Thai. Facts shown to players must be checked; legends get the ✦ label.
