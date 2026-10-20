#!/usr/bin/env bash
# Build the playable single-file game: dev/game.src.html (+ i18n tables) -> index.html
set -e
cd "$(dirname "$0")"
python3 build_i18n.py game.src.html ../index.html
python3 - <<'PY'
import re;h=open('../index.html',encoding='utf-8').read();s=re.findall(r'<script>([\s\S]*?)</script>',h);open('game.js','w',encoding='utf-8').write(max(s,key=len))
PY
node --check game.js && echo BUILD_OK
